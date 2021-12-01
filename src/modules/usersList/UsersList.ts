import { Options } from '@utils/interfaces';
import { v4 as makeUUID } from 'uuid';

import { MessengerModule } from '@modules/MessengerModule';
import { createUsersList } from './usersList.tmpl';
import { createUsersListItem } from './components/usersListItem.tmpl';

export class UsersList extends MessengerModule {
  _id: string;

  constructor(options: Options) {
    super({
      name: 'UsersList',
      state: options.state,
    });

    this._id = makeUUID();
  }

  prepare(): void {
    this.createTemplate();
  }

  _createResources() {
    const tagName = 'ul';
    const className = 'user-list';
    const newElement = this._createDocumentElement(tagName);
    newElement.className = className;
    if (this._id) {
      newElement.setAttribute('data-id', this._id);
    }
    this.element = newElement;
  }

  createTemplate(): void {
    const items = this.createComponentsTmpl(this.state, createUsersListItem) || '';

    this.setTemplate(createUsersList(items, this._id));
  }

  createComponentsTmpl(stateComponents: any, createComponentTmpl: any): string {
    return Object.entries(stateComponents).reduce(function (tmpl, compState) {
      const cState: any = compState[1];
      return tmpl + createComponentTmpl(cState.chatId, cState.id, cState.imgUrl, cState.name, cState.text);
    }, '');
  }
}
