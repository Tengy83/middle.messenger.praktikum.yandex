import { MessengerModule } from '../MessengerModule';

import { createUser } from './user.tmpl';
import { createButton } from '../button/button.tmpl';

export class User extends MessengerModule {
  constructor(options) {
    super({
      name: 'User',
      state: options.state,
      ...options,
    });
  }

  prepare() {
    this.createTemplate();
  }

  createTemplate() {
    const buttons =
      this.createComponentsTmpl(this.state.buttons, createButton) || '';

    this.setTemplate(createUser(buttons));
  }
}
