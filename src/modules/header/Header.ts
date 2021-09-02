import { Options } from "../../../utils/interfaces";

import { MessengerModule } from "../MessengerModule";
import { createHeader } from "./header.tmpl";
import { createUserLink } from "./components/userLink.tmpl";

export class Header extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "Header",
      state: options.state,
      ...options,
    });
  }
  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    let userLinktmpl = "";
    if ("userLink" in this.state) {
      userLinktmpl = createUserLink();
    }
    const headerTmpl = createHeader(userLinktmpl);

    this.setTemplate(headerTmpl);
  }
}
