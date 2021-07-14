import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { createAuthorization } from './authorization.tmpl';

export class Authorization extends MessengerModule {
  constructor(options) {
    super({
      name: 'Authorization',
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
    const authorizationTmpl = createAuthorization(formTmpl);

    this.setTemplate(authorizationTmpl);
  }
}
