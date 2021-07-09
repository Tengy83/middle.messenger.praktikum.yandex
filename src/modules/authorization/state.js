export const state = {
  className: 'authorization',
  titleClass: 'authorization__title',
  title: `С FriendlyMessage вы всегда<br /> остаетесь на связи со своими знакомыми.`,
  form: {
    action: '/user',
    method: 'post',
    className: 'authorization__form form',

    inputs: {
      login: {
        type: 'text',
        name: 'login',
        className: 'form__input login',
        placeholder: 'Логин',
      },
      password: {
        type: 'password',
        name: 'password',
        className: 'form__input password',
        placeholder: 'Пароль',
      },
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Войти',
      },
      forgotPass: {
        tag: 'a',
        link: '#',
        className: 'form__forgot_pass form__link',
        title: 'Забыли пароль?',
      },
      register: {
        tag: 'a',
        link: '#',
        className: 'btn btn-red form__register_link page_link',
        title: 'Регистрация',
        dataPage: 'registration',
        hr: true,
      },
    },
  },
};
