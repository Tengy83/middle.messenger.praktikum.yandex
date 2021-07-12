import { state } from './state';
import { createForm } from '../form/form.tmpl';

export function createUsersList() {
  return `<div class="{{ className }}">
  ${createForm(state.form)}
  <a href="{{newChatLink.link}}" class="{{newChatLink.className}}" disabled>{{newChatLink.title}}</a>
  
  <ul class="user-list">
      <li class="user-list__item user-item">
        <img
          src="./img/user_icon.svg"
          alt=""
          class="user-item__icon"
        />
        <div class="user-item__content">
        <span class="user-item__title">Александр</span
        ><small class="user-item__text">Жизнь трудна...</small
        >
        </div>
        <a href="#" class="small-item__delete" title="Удалить Чат"
          ><img src="./img/menu_tres_icon.svg" alt=""
        /></a>
      </li>
      <li class="user-list__item user-item">
        <img
          src="./img/user_icon.svg"
          alt=""
          class="user-item__icon"
        />
        <div class="user-item__content">
        <span class="user-item__title">Евгений</span
        ><small class="user-item__text">Жизнь трудна...</small
        >
        </div>
        <a href="#" class="small-item__delete" title="Удалить Чат"
          ><img src="./img/menu_tres_icon.svg" alt=""
        /></a>
      </li>
      <li class="user-list__item user-item">
        <img
          src="./img/user_icon.svg"
          alt=""
          class="user-item__icon"
        />
        <div class="user-item__content">
        <span class="user-item__title">Мария</span
        ><small class="user-item__text">Жизнь трудна...</small
        >
        </div>
        <a href="#" class="small-item__delete" title="Удалить Чат"
          ><img src="./img/menu_tres_icon.svg" alt=""
        /></a>
      </li>
      <li class="user-list__item user-item">
        <img
          src="./img/user_icon.svg"
          alt=""
          class="user-item__icon"
        />
        <div class="user-item__content">
        <span class="user-item__title">Владимир</span
        ><small class="user-item__text">Жизнь трудна...</small
        >
        </div>
        <a href="#" class="small-item__delete" title="Удалить Чат"
          ><img src="./img/menu_tres_icon.svg" alt=""
        /></a>
      </li>
    </ul>
    </div>`;
}
