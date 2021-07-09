export const state = {
  className: 'registration',
  titleClass: 'registration__title',
  title: 'Регистрация',
  form: {
    action: 'user/registration',
    method: 'post',
    className: 'registration__form form',
    inputs: {
      email: {
        type: 'email',
        name: 'email',
        className: 'form__input email',
        placeholder: 'Почта',
      },
      login: {
        type: 'text',
        name: 'login',
        className: 'form__input login',
        placeholder: 'Логин',
      },
      firstName: {
        type: 'text',
        name: 'first_name',
        className: 'form__input first_name',
        placeholder: 'Имя',
      },
      secondName: {
        type: 'text',
        name: 'second_name',
        className: 'form__input second_name',
        placeholder: 'Фамилия',
      },
      phone: {
        type: 'tel',
        name: 'phone',
        className: 'form__input phone',
        placeholder: 'Телефон',
      },
      password: {
        type: 'password',
        name: 'password',
        className: 'password',
        placeholder: 'Пароль',
      },
      passwordRepeat: {
        type: 'password',
        name: 'passwordRepeat',
        className: 'passwordRepeat',
        placeholder: 'Пароль (еще раз)',
      },
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Зарегистрироваться',
      },
      login: {
        tag: 'a',
        link: '#',
        className: 'form__login-link form__link',
        title: 'Войти',
        dataPage: 'home',
      },
    },
  },
};
