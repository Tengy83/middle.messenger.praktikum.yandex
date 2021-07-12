export const state = {
  className: 'user',
  titleClass: 'user__title',
  img: './img/user_profile.svg',
  title: 'Александр',
  email: 'yandex@ya.ru',
  login: 'Alex',
  first_name: 'Александр',
  second_name: 'Программер',
  chat_name: 'Evgenii',
  phone: '+7 (777) 777-77-77',
  form: {
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Редактировать',
        dataPage: 'edit_user',
      },
      changePswLink: {
        tag: 'a',
        link: '#',
        className: 'btn btn-red',
        title: 'Изменить пароль',
        dataPage: 'change_password',
      },
      back: {
        tag: 'a',
        link: '#',
        className: 'back-link',
        title: 'Выйти',
        dataPage: 'chats',
        hr: true,
      },
    },
  },
};
