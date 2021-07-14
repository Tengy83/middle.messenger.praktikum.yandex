import { state as stateHeader } from '../modules/header/state';
import { state as stateEditUser } from '../modules/editUser/state';

import { Header } from '../modules/header/Header';
import { EditUser } from '../modules/editUser/EditUser';

export function createPage() {
  const header = new Header({ state: stateHeader });
  const editUser = new EditUser({ state: stateEditUser });

  return header.toHtml() + editUser.toHtml();
}
