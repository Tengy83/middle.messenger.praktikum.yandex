import { URL_LINKS } from "../../../constants";

import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createAuthorization } from "./authorization.tmpl";
import { Options, LoginRequest } from "../../../utils/interfaces";
import { LoginAPI } from "../../../utils/api/LoginAPI";
import { UserAPI } from "../../../utils/api/UserAPI";
import { addError } from "../../../utils/utils";

export class Authorization extends MessengerModule {
  authAPI: LoginAPI;
  userAPI: UserAPI;
  globalState: object;

  constructor(options: Options) {
    super({
      name: "Authorization",
      state: options.state,
      ...options,
    });

    this.authAPI = new LoginAPI();
    this.userAPI = new UserAPI();
  }

  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    const form = new Form({ state: this.state.form, api: this.api.bind(this) });
    this.addToInternalComponentsList(form);

    const formTmpl = form.getTemplate();
    const authorizationTmpl = createAuthorization(formTmpl);

    this.setTemplate(authorizationTmpl);
  }

  api(data: LoginRequest): void {
    this.authAPI.request(JSON.stringify(data)).then(
      (result) => {
        if (result.status !== 200) {
          addError(".authorization__form", "Ошибка авторизации");
        } else {
          window.location.href = URL_LINKS.chats;
        }
      },
      (error) => {
        addError(".authorization__form", "Ошибка авторизации");
      }
    );
  }
}
