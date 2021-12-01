import { state as stateHeader } from '@modules/header/state';
import { state as stateEditUser } from '@modules/editUser/state';

import { Header } from '@modules/header/Header';
import { EditUser } from '@modules/editUser/EditUser';
import { MessengerPage } from './MessengerPage';

export class EditUserPage extends MessengerPage {
  constructor(root: string) {
    super({
      name: 'EditUserPage',
      componentsList: [new Header({ state: stateHeader }), new EditUser({ state: stateEditUser })],
      root,
    });
  }
}
