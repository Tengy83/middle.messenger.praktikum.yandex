import { state as stateHeader } from '../modules/header/state';
import { state as stateAuthorization } from '../modules/authorization/state';

import { Header } from '../modules/header/Header';
import { Authorization } from '../modules/authorization/Authorization';

export function createPage() {
  const header = new Header({ state: stateHeader });
  const authorization = new Authorization({ state: stateAuthorization });

  return header.toHtml() + authorization.toHtml();
}
