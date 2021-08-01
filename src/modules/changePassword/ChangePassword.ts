import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createChangePassword } from "./changePassword.tmpl";
import { Options } from "../../../utils/interfaces";

export class ChangePassword extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "ChangePassword",
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
    const changePasswordTmpl = createChangePassword(formTmpl);

    this.setTemplate(changePasswordTmpl);
  }
}
