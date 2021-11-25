export const state = {
  form: {
    action: "chats/",
    method: "get",
    className: "new-chat__form form",
    inputs: {
      search: {
        type: "text",
        name: "name_chat",
        className: "form__input new-chat",
        placeholder: "Имя чата",
      },
    },
    buttons: {
      submit: {
        tag: "button",
        type: "submit",
        className: "btn-new-chat",
        title: "ок",
      },
    },
  },
};
