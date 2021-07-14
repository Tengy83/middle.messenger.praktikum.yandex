import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { createRegistration } from './registration.tmpl';

export class Registration extends MessengerModule {
  constructor(options) {
    super({
      name: 'Registration',
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
    const registrationTmpl = createRegistration(formTmpl);

    this.setTemplate(registrationTmpl);
  }
}
