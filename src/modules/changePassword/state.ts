export const state = {
  className: "change-password",
  titleClass: "change-password__title",
  title: "Сменить пароль",
  form: {
    action: "user/changepsw",
    method: "post",
    className: "change-password__form form",
    inputs: {
      password: {
        type: "password",
        name: "oldPassword",
        className: "oldPassword",
        placeholder: "Старый пароль",
      },
      passwordRepeat: {
        type: "password",
        name: "newPassword",
        className: "newPassword",
        placeholder: "Новый пароль",
      },
    },
    buttons: {
      submit: {
        tag: "button",
        type: "submit",
        className: "btn",
        title: "Поменять пароль",
      },
      back: {
        tag: "a",
        link: "#",
        className: "form__back-link form__link",
        title: "Отмена",
        dataPage: "user",
      },
    },
  },
};
