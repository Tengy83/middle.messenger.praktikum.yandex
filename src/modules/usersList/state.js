export const state = {
  className: 'chats-list',
  form: {
    action: 'search/',
    method: 'get',
    className: 'search__form form',
    inputs: {
      search: {
        type: 'text',
        name: 'search',
        className: 'form__input search',
        placeholder: 'Поиск',
      },
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn-search',
        title: '<span></span>',
      },
    },
  },
  newChatLink: {
    link: '#',
    className: 'btn btn-grey new_chat_link',
    title: '<span>Новый чат</span>',
  },
};
