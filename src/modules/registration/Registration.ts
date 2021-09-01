import { Options } from "../../../utils/interfaces";
import { URL_LINKS } from "../../../constants";

import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createRegistration } from "./registration.tmpl";
import { LoginAPI } from "../../../utils/api/LoginAPI";
import { addError } from "../../../utils/utils";

type RegistrtionRequest = {
  first_name: "string";
  second_name: "string";
  login: "string";
  email: "string";
  password: "string";
  phone: "string";
};

export class Registration extends MessengerModule {
  registrtionAPI: LoginAPI;

  constructor(options: Options) {
    super({
      name: "Registration",
      state: options.state,
      ...options,
    });

    this.registrtionAPI = new LoginAPI();
  }

  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    const form = new Form({ state: this.state.form, api: this.api.bind(this) });
    this.addToInternalComponentsList(form);

    const formTmpl = form.getTemplate();
    const registrationTmpl = createRegistration(formTmpl);

    this.setTemplate(registrationTmpl);
  }

  api(data: RegistrtionRequest): void {
    this.registrtionAPI.create(JSON.stringify(data)).then(
      (result) => {
        if (result.status !== 200) {
          addError(".registration__form", "Ошибка регистрации");
        } else {
          window.location.href = URL_LINKS["chats"];
        }
      },
      (error) => {
        addError(".registration__form", "Ошибка регистрации");
      }
    );
  }
}
