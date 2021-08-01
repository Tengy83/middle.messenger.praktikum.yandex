import { Options } from "../../../utils/interfaces";

import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createUsersList } from "./usersList.tmpl";

export class UsersList extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "UsersList",
      state: options.state,
      ...options,
    });
  }

  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    const form = new Form({ state: this.state.form });
    this.addToInternalComponentsList(form);

    const formTmpl = form.getTemplate();
    const usersListTmpl = createUsersList(formTmpl);

    this.setTemplate(usersListTmpl);
  }
}
