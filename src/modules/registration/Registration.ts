import { Options } from "../../../utils/interfaces";

import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createRegistration } from "./registration.tmpl";

export class Registration extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "Registration",
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
    const registrationTmpl = createRegistration(formTmpl);

    this.setTemplate(registrationTmpl);
  }
}
