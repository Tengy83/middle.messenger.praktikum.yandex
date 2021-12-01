import { state as stateHeader } from '@modules/header/state';
import { state as stateRegistration } from '@modules/registration/state';

import { Header } from '@modules/header/Header';
import { Registration } from '@modules/registration/Registration';

import { MessengerPage } from './MessengerPage';

export class RegistrationPage extends MessengerPage {
  constructor(root: string) {
    super({
      name: 'RegistrationPage',
      componentsList: [new Header({ state: stateHeader }), new Registration({ state: stateRegistration })],
      root,
    });
  }
}
