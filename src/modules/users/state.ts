export const state = {
  className: "chats-list",
  form: {
    action: "chats/",
    method: "post",
    className: "search__form form",
    inputs: {
      search: {
        type: "text",
        name: "search",
        className: "form__input search",
        placeholder: "ID-юзера; ID-чата",
      },
    },
    buttons: {
      submit: {
        tag: "button",
        type: "submit",
        className: "btn-search",
        title: "<span class='search_btn_span'></span>",
      },
    },
  },
  newChatLink: {
    link: "#",
    className: "btn btn-grey new_chat_link",
    title: "Новый чат",
  },
  userList: {
    198: {
      id: 1,
      imgUrl: "../img/user_icon.svg",
      name: "Александр",
      text: "Жизнь трудна...",
    },
    200: {
      id: 2,
      imgUrl: "../img/user_icon.svg",
      name: "Владимир",
      text: "... или ?",
    },
    3: {
      id: 3,
      imgUrl: "../img/user_icon.svg",
      name: "Евгений",
      text: "Жизнь весела...",
    },
    4: {
      id: 4,
      imgUrl: "../img/user_icon.svg",
      name: "Мария",
      text: "Жизнь есть жизнь...",
    },
  },
};
