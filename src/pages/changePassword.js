import { state as stateHeader } from '../modules/header/state';
import { state as stateChangePassword } from '../modules/changePassword/state';

import { Header } from '../modules/header/Header';
import { ChangePassword } from '../modules/changePassword/ChangePassword';

export function createPage() {
  const header = new Header({ state: stateHeader });
  const changePassword = new ChangePassword({ state: stateChangePassword });

  return header.toHtml() + changePassword.toHtml();
}
