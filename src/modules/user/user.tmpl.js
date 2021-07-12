import { createButton } from '../button/button.tmpl';
import { state } from './state';

export function createUser() {
  return `<div class="{{ className }}">
    <img src="{{ img }}" alt="{{ title }}" />
    <h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    <div class="user-profile">
      <div class="user-profile__item user-email">
        <span class="user-email__title">Почта</span><span class="user-email__content">{{ email }}</span>
      </div>
      <div class="user-profile__item user-login">
        <span class="user-login__title">Логин</span><span class="user-login__content">{{ login }}</span>
      </div>
      <div class="user-profile__item user-f_name">
        <span class="user-f_name__title">Имя</span><span class="user-f_name__content">{{ first_name }}</span>
      </div>
      <div class="user-profile__item user-s_name">
        <span class="user-s_name__title">Фамилия</span><span class="user-s_name__content">{{ second_name }}</span>
      </div>
      <div class="user-profile__item user-c_name">
        <span class="user-c_name__title">Имя в чате</span><span class="user-c_name__content">{{ chat_name }}</span>
      </div>
      <div class="user-profile__item user-phone">
        <span class="user-phone__title">Телефон</span><span class="user-phone__content">{{ phone }}</span>
      </div>
      ${createButtonsTmpl()}
    </div>
  </div>`;
}

function createButtonsTmpl() {
  let buttons = '';

  Object.entries(state['form']['buttons']).forEach(function (buttonState) {
    buttons += createButton(buttonState[1], buttonState[0]);
  });
  console.log(buttons);
  return buttons;
}
