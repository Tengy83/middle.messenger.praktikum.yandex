import { Options } from "../../../utils/interfaces";

import { MessengerModule } from "../MessengerModule";

import { createUser } from "./user.tmpl";
import { createButton } from "../button/button.tmpl";

export class User extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "User",
      state: options.state,
      ...options,
    });
  }

  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    const buttons =
      this.createComponentsTmpl(this.state.buttons, createButton) || "";

    this.setTemplate(createUser(buttons));
  }
}
