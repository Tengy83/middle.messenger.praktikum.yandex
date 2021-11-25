import { Options } from '../../../utils/interfaces';
import { URL_LINKS, FILES_URL } from '../../../constants';
import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { UsersList } from '../usersList/UsersList';
import { createUsers } from './users.tmpl';
import { ChatsAPI } from '../../../utils/api/ChatsAPI';
import { ChatUsersAPI } from '../../../utils/api/ChatUsersAPI';

const chatsAPI = new ChatsAPI();
const сhatUsersAPI = new ChatUsersAPI();
const notChatsPage = document.location.pathname !== URL_LINKS.chats;

export class Users extends MessengerModule {
  constructor(options: Options) {
    super({
      name: 'Users',
      state: options.state,
      listeners: ['click'],
    });
  }

  prepare(): void {
    this.createTemplate();

    this.getChatsApi();
  }

  createTemplate(): void {
    let formTmpl = '';
    if (notChatsPage) {
      const form = new Form({
        state: this.state.form,
        api: this.api.bind(this),
      });
      this.addToInternalComponentsList(form);

      formTmpl = form.getTemplate();
    }
    const usersTmpl = createUsers(formTmpl);
    this.setTemplate(usersTmpl);
  }

  onClick(event: Event) {
    event.preventDefault();

    let isCreateChat = (<HTMLInputElement>event.target).classList.contains('new_chat_link');
    let isDeleteChat = (<HTMLInputElement>event.target).classList.contains('delete-chat');
    let isGoToChat = (<HTMLInputElement>event.target).classList.contains('chatLink');
    let isAddUsersToChat = (<HTMLInputElement>event.target).classList.contains('search_btn_span');
    let isDeleteUserToChat = (<HTMLInputElement>event.target).classList.contains('user-item__delete');

    switch (true) {
      case isCreateChat:
        this.createChat(event);
        break;
      case isDeleteChat:
        let chatName = (<HTMLInputElement>event.target).dataset.name;
        if (confirm(`Удалить чат - ${chatName}?`)) {
          this.deleteChatApi((<HTMLInputElement>event.target).dataset.id);
        }

        break;
      case isGoToChat:
        window.location.href = (<HTMLInputElement>event.target).dataset.url || URL_LINKS.chats;
        break;
      case isAddUsersToChat:
        let input: any = document.querySelector('.form__input.search');
        if (input) {
          this.api(input.value);
        }
        break;
      case isDeleteUserToChat:
        this.deleteUserToChat(event);
        break;
      default:
    }
  }

  deleteUserToChat(event: Event) {
    let userId = (<HTMLInputElement>event.target).dataset.id;
    let userItem = document.querySelector(`.user-list__item[data-id="${userId}"]`);
    let chatId = (<HTMLInputElement>event.target).dataset.chat;
    let userName = (<HTMLInputElement>event.target).dataset.name;

    if (confirm(`Удалить ${userName} из чата?`))
      сhatUsersAPI.delete(`{"users": [${userId}],"chatId": ${chatId}}`).then((res) => {
        if (res.status === 200 && userItem) {
          userItem.remove();
        }
      });
  }

  createChat(event: Event) {
    let chatName = prompt('Введите название чата', '');

    chatsAPI.create(`{"title": "${chatName}"}`).then((r) => {
      if (r.status === 200) {
        this.getChatsApi();
      }
    });
  }

  deleteChatApi(id: any) {
    chatsAPI.delete(`{"chatId": ${id}}`).then((r) => {
      if (r.status === 200) {
        let chatLink = document.querySelector(`.chatLink[data-id="${id}"]`);
        if (chatLink) {
          chatLink.remove();
        }
      }
    });
  }

  getChatsApi() {
    chatsAPI
      .request()
      .then((r) => JSON.parse(r.response))
      .then((data) => {
        let newChatLink = document.querySelector('.new_chat_link');
        let messageTitle = document.querySelector('.message__title');
        let paramsUrl = document.location.search;
        let chatId: any;
        if (paramsUrl) {
          chatId = new URLSearchParams(paramsUrl).get('chat');
        }
        data.forEach((chat: any) => {
          if (newChatLink) {
            newChatLink.insertAdjacentHTML(
              'afterend',
              `<div class="chatLink" data-id="${chat.id}" data-url="${URL_LINKS.messenger}?chat=${chat.id}">id:${chat.id}; ${chat.title}<span data-id="${chat.id}" data-name="${chat.title}" class="delete delete-chat">&#10006;</div>`
            );
          }

          if (paramsUrl && +chatId == chat.id && messageTitle) {
            messageTitle.textContent = chat.title;
          }

          this.getChatUsersAPI(chat.id);
        });
      });
  }

  getChatUsersAPI(chatId: any) {
    let chatLink = document.querySelector(`.chatLink[data-id="${chatId}"]`);
    сhatUsersAPI
      .request(chatId)
      .then((r) => JSON.parse(r.response))
      .then((data) => {
        let userList: any = {};
        data.forEach((user: any) => {
          let item: any = {};
          item.chatId = chatId;
          item.id = user.id;
          item.imgUrl = user.avatar ? FILES_URL + user.avatar : '../img/user_icon.svg';
          item.name = user.display_name ? user.display_name : user.first_name;
          item.text = `Роль: ${user.role}`;

          userList[user.id] = item;
        });
        if (chatLink && notChatsPage) {
          const usersList = new UsersList({ state: userList });
          this.addToInternalComponentsList(usersList);

          const usersListTmpl = usersList.getTemplate();
          chatLink.insertAdjacentHTML('afterend', usersListTmpl);
        }
      });
  }

  api(data: string): void {
    let arrData = data.trim().split(';');
    if (arrData.length < 2) {
      return;
    }
    let userId = +arrData[0].trim();
    let chatId = +arrData[1].trim();

    if (typeof userId === 'number' && typeof chatId === 'number') {
      сhatUsersAPI.create(`{"users": [${userId}],"chatId": ${chatId}}`).then((res) => {
        if (res.status === 200) {
          this.getChatUsersAPI(chatId);
        }
      });
    }
  }
}
