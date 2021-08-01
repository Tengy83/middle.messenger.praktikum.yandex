import { state as stateHeader } from "../modules/header/state";
import { state as stateUser } from "../modules/user/state";

import { Header } from "../modules/header/Header";
import { User } from "../modules/user/User";

import { MessengerPage } from "./MessengerPage";

export class UserPage extends MessengerPage {
  constructor(root: string) {
    super({
      name: "UserPage",
      componentsList: [
        new Header({ state: stateHeader }),
        new User({ state: stateUser }),
      ],
      root,
    });
  }
}
