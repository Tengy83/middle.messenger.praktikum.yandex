import { Options } from "../../../utils/interfaces";

import { FILES_URL, URL_LINKS } from "../../../constants";
import { MessengerModule } from "../MessengerModule";

import { createUser } from "./user.tmpl";
import { createButton } from "../button/button.tmpl";
import { UserAPI } from "../../../utils/api/UserAPI";
import { LoginAPI } from "../../../utils/api/LoginAPI";
import { addError } from "../../../utils/utils";

export class User extends MessengerModule {
  loginAPI: LoginAPI;

  constructor(options: Options) {
    super({
      name: "User",
      state: options.state,
      listeners: ["click"],
      ...options,
    });

    this.loginAPI = new LoginAPI();
  }

  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    this.api();

    const buttons =
      this.createComponentsTmpl(this.state.buttons, createButton) || "";

    this.setTemplate(createUser(buttons));
  }

  onClick(event: Event) {
    event.preventDefault();
    if (event.target.classList.contains("logout-link")) {
      this.logoutAPI();
    }
  }

  logoutAPI() {
    this.loginAPI.delete().then((result) => {
      if (result.status === 200) {
        window.location.href = URL_LINKS["home"];
      }
    });
  }

  api(): void {
    new UserAPI().request().then((result) => {
      if (result.status !== 200) {
        addError(".user-profile", "Ошибка: обновите страницу");
      } else {
        Object.entries(JSON.parse(result.response)).forEach((entrie) => {
          if (entrie[1]) {
            if (entrie[0] == "avatar") {
              this.state[entrie[0]] = FILES_URL + entrie[1];
            } else {
              this.state[entrie[0]] = entrie[1];
            }
          }
        });
      }
    });
  }
}
