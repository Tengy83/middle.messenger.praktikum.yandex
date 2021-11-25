export const state = {
  className: 'chats-list',
  form: {
    action: 'chats/',
    method: 'post',
    className: 'search__form form',
    inputs: {
      search: {
        type: 'text',
        name: 'search',
        className: 'form__input search',
        placeholder: 'ID-юзера; ID-чата',
      },
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn-search',
        title: "<span class='search_btn_span'></span>",
      },
    },
  },
  newChatLink: {
    link: '#',
    className: 'btn btn-grey new_chat_link',
    title: 'Новый чат',
  },
};
