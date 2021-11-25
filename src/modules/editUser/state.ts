export const state = {
  className: "edit-user",
  titleClass: "edit-user__title",
  title: "",
  img: "./img/user_profile.svg",
  form: {
    action: "user/edit",
    method: "post",
    enctype: "multipart/form-data",
    className: "edit-user__form form",
    inputs: {
      email: {
        type: "email",
        name: "email",
        className: "form__input email",
        label: "Почта",
      },
      login: {
        type: "text",
        name: "login",
        className: "form__input login",
        value: "",
        label: "Логин",
      },
      firstName: {
        type: "text",
        name: "first_name",
        className: "form__input first_name",
        value: "",
        label: "Имя",
      },
      secondName: {
        type: "text",
        name: "second_name",
        className: "form__input second_name",
        value: "",
        label: "Фамилия",
      },
      chatsName: {
        type: "text",
        name: "display_name",
        className: "form__input display_name",
        value: "",
        label: "Имя в чате",
      },
      phone: {
        type: "tel",
        name: "phone",
        className: "form__input phone",
        value: "",
        label: "Телефон",
      },
      file: {
        type: "file",
        name: "avatar",
        className: "form__input file",
      },
    },
    buttons: {
      submit: {
        tag: "button",
        type: "submit",
        className: "btn",
        title: "Редактировать",
      },
      userLink: {
        tag: "a",
        link: "#",
        className: "form__user-link form__link",
        title: "Выйти",
        dataPage: "user",
      },
    },
  },
};
