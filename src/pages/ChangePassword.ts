import { state as stateHeader } from "../modules/header/state";
import { state as stateChangePassword } from "../modules/changePassword/state";

import { Header } from "../modules/header/Header";
import { ChangePassword } from "../modules/changePassword/ChangePassword";
import { MessengerPage } from "./MessengerPage";

export class ChangePasswordPage extends MessengerPage {
  constructor(root: string) {
    super({
      name: "ChangePasswordPage",
      componentsList: [
        new Header({ state: stateHeader }),
        new ChangePassword({ state: stateChangePassword }),
      ],
      root,
    });
  }
}
