import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { createUsersList } from './usersList.tmpl';

export class UsersList extends MessengerModule {
  constructor(options) {
    super({
      name: 'UsersList',
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
    const usersListTmpl = createUsersList(formTmpl);

    this.setTemplate(usersListTmpl);
  }
}
