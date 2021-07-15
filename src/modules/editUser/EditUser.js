import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { createEditUser } from './editUser.tmpl';

export class EditUser extends MessengerModule {
  constructor(options) {
    super({
      name: 'EditUser',
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
    const editUserTmpl = createEditUser(formTmpl);

    this.setTemplate(editUserTmpl);
  }
}
