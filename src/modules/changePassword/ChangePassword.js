import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { createChangePassword } from './changePassword.tmpl';

export class ChangePassword extends MessengerModule {
  constructor(options) {
    super({
      name: 'ChangePassword',
      state: options.state,
      ...options,
    });
  }

  prepare() {
    this.createTemplate();
  }

  createTemplate() {
    const form = new Form({ state: this.state.form });
    const formTmpl = form.getTemplate();
    const changePasswordTmpl = createChangePassword(formTmpl);

    this.setTemplate(changePasswordTmpl);
  }
}
