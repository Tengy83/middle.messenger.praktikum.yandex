export const state = {
  className: 'edit-user',
  titleClass: 'edit-user__title',
  title: 'Александр',
  img: './img/user_profile.svg',
  form: {
    action: 'user/edit',
    method: 'post',
    className: 'edit-user__form form',
    inputs: {
      email: {
        type: 'email',
        name: 'email',
        className: 'form__input email',
        value: 'pochta@yandex.ru',
      },
      login: {
        type: 'text',
        name: 'login',
        className: 'form__input login',
        value: 'Alex',
      },
      firstName: {
        type: 'text',
        name: 'first_name',
        className: 'form__input first_name',
        value: 'Александр',
      },
      secondName: {
        type: 'text',
        name: 'second_name',
        className: 'form__input second_name',
        value: 'Александров',
      },
      chatsName: {
        type: 'text',
        name: 'chats_name',
        className: 'form__input chats_name',
        value: 'Алекс',
      },
      phone: {
        type: 'tel',
        name: 'phone',
        className: 'form__input phone',
        value: '+7 (909) 967 30 30',
      },
      file: {
        type: 'file',
        name: 'file',
        className: 'form__input file',
      },
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Редактировать',
      },
      userLink: {
        tag: 'a',
        link: '#',
        className: 'form__user-link form__link',
        title: 'Выйти',
        dataPage: 'user',
      },
    },
  },
};
