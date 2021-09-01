import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createMessenger } from "./messenger.tmpl";
import { Options } from "../../../utils/interfaces";
import { URL_LINKS } from "../../../constants";
import { TokenAPI } from "../../../utils/api/TokenAPI";
import { ChatsAPI } from "../../../utils/api/ChatsAPI";
import { UserAPI } from "../../../utils/api/UserAPI";

const tokenAPI = new TokenAPI();
const chatsAPI = new ChatsAPI();
const userAPI = new UserAPI();

export class Messenger extends MessengerModule {
  _token: string;
  _socket: WebSocket;

  constructor(options: Options) {
    super({
      name: "Messenger",
      state: options.state,
      ...options,
    });
  }

  prepare(): void {
    this.createTemplate();
    this.getTokenAPI();
  }

  createTemplate(): void {
    const form = new Form({ state: this.state.form, api: this.api.bind(this) });
    this.addToInternalComponentsList(form);

    const formTmpl = form.getTemplate();
    const messengerTmpl = createMessenger(formTmpl);

    this.setTemplate(messengerTmpl);
  }

  api(data) {
    let messageInput = document.querySelector(".message__input");
    messageInput.value = "";
    this._socket.send(
      JSON.stringify({
        content: data.message,
        type: "message",
      })
    );
  }

  listItem(
    message: string = "",
    time: string = "",
    className: string = "companion"
  ) {
    return `<li class="${className} message-list__item">
    <div class="message__content">${message}</div>
    <div class="message__data">${time}</div>
  </li>`;
  }

  getTokenAPI() {
    let paramsUrl = document.location.search;
    let chatId = "";
    if (paramsUrl) {
      chatId = new URLSearchParams(paramsUrl).get("chat");

      return tokenAPI
        .request(chatId)
        .then((r) => JSON.parse(r.response))
        .then((data) => {
          this._token = data.token;
          return data.token;
        })
        .then((token) => {
          userAPI
            .request()
            .then((r) => JSON.parse(r.response))
            .then((data) => {
              this._socket = new WebSocket(
                `wss://ya-praktikum.tech/ws/chats/${data.id}/${chatId}/${token}`
              );

              this._socket.addEventListener("open", () => {
                console.log("Соединение установлено");

                this._socket.send(
                  JSON.stringify({
                    content: "0",
                    type: "get old",
                  })
                );
              });

              this._socket.addEventListener("close", (event) => {
                if (event.wasClean) {
                  console.log("Соединение закрыто чисто");
                } else {
                  console.log("Обрыв соединения");
                }
              });

              const listMessages = document.querySelector(".message__list");
              this._socket.addEventListener("message", (event) => {
                let messageData = JSON.parse(event.data);

                if (messageData.type === "message") {
                  this.message(listMessages, messageData, data.id);
                } else if (Array.isArray(messageData)) {
                  messageData.forEach((mes) => {
                    this.message(listMessages, mes, data.id);
                  });
                }
              });

              this._socket.addEventListener("error", (event) => {
                console.log("Ошибка", event.message);
              });
            });
        });
    } else {
      chatsAPI
        .request()
        .then((r) => JSON.parse(r.response))
        .then((data) => {
          if (data.length > 0) {
            window.location.href = `${URL_LINKS["messenger"]}?chat=${data[0].id}`;
          } else {
            window.location.href = URL_LINKS["chats"];
          }
        });
    }
  }

  message(listMessages, messageData, userId) {
    let time = new Date(messageData.time).toLocaleTimeString().slice(0, -3);

    listMessages.insertAdjacentHTML(
      "beforeEnd",
      this.listItem(
        messageData.content,
        time,
        messageData.user_id === userId ? "user" : "companion"
      )
    );
  }
}
