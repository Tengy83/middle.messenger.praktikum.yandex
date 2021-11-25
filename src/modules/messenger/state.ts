export const state = {
  className: "message",
  titleClass: "message__title",
  title: ``,
  form: {
    action: "/message",
    method: "post",
    className: "message__form form",

    inputs: {
      message: {
        type: "text",
        name: "message",
        className: "form__input message__input",
      },
    },
    buttons: {
      submit: {
        tag: "button",
        type: "submit",
        className: "btn",
        title: "<span></span>",
      },
    },
  },
};
