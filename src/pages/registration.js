import { state as stateHeader } from '../modules/header/state';
import { state as stateRegistration } from '../modules/registration/state';

import { Header } from '../modules/header/Header';
import { Registration } from '../modules/registration/Registration';

export function createPage() {
  const header = new Header({ state: stateHeader });
  const registration = new Registration({ state: stateRegistration });

  return header.toHtml() + registration.toHtml();
}
