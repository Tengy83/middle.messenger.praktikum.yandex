export const state = {
  className: "registration",
  titleClass: "registration__title",
  title: "Регистрация",
  form: {
    action: "user/registration",
    method: "post",
    className: "registration__form form",
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
        label: "Логин",
      },
      firstName: {
        type: "text",
        name: "first_name",
        className: "form__input first_name",
        label: "Имя",
      },
      secondName: {
        type: "text",
        name: "second_name",
        className: "form__input second_name",
        label: "Фамилия",
      },
      phone: {
        type: "tel",
        name: "phone",
        className: "form__input phone",
        label: "Телефон",
      },
      password: {
        type: "password",
        name: "password",
        className: "password",
        label: "Пароль",
      },
      passwordRepeat: {
        type: "password",
        name: "passwordRepeat",
        className: "passwordRepeat",
        label: "Пароль (еще раз)",
      },
    },
    buttons: {
      submit: {
        tag: "button",
        type: "submit",
        className: "btn",
        title: "Зарегистрироваться",
      },
      login: {
        tag: "a",
        link: "#",
        className: "form__login-link form__link",
        title: "Войти",
        dataPage: "home",
      },
    },
  },
};
