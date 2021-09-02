import { Options } from "../../../utils/interfaces";

import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createEditUser } from "./editUser.tmpl";

export class EditUser extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "EditUser",
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
    const editUserTmpl = createEditUser(formTmpl);

    this.setTemplate(editUserTmpl);
  }
}
