import { state as stateHeader } from '@modules/header/state';
import { state as stateError } from '@modules/error/state';

import { Header } from '@modules/header/Header';
import { Error as ErrorMessage } from '@modules/error/Error';
import { MessengerPage } from './MessengerPage';

export class Error404Page extends MessengerPage {
  constructor(root: string) {
    super({
      name: 'Error404Page',
      componentsList: [new Header({ state: stateHeader }), new ErrorMessage({ state: stateError })],
      root,
    });
  }
}
