import { Options } from "../../../utils/interfaces";

import { MessengerModule } from "../MessengerModule";
import { createError } from "./error.tmpl";

export class Error extends MessengerModule {
  constructor(options: Options) {
    super({
      name: "Error",
      state: options.state,
      template: createError(),
    });
  }
}
