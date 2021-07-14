import { state as stateHeader } from '../modules/header/state';
import { state as stateUser } from '../modules/user/state';

import { Header } from '../modules/header/Header';
import { User } from '../modules/user/User';

export function createPage() {
  const header = new Header({ state: stateHeader });
  const user = new User({ state: stateUser });

  return header.toHtml() + user.toHtml();
}
