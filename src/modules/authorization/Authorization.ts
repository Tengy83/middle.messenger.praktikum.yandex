import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createAuthorization } from "./authorization.tmpl";
import { Options } from "../../../utils/interfaces";

export class Authorization extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "Authorization",
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
    const authorizationTmpl = createAuthorization(formTmpl);

    this.setTemplate(authorizationTmpl);
  }
}
