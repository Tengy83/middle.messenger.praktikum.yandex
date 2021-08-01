import { state as stateHeader } from "../modules/header/state";
import { state as stateAuthorization } from "../modules/authorization/state";

import { Header } from "../modules/header/Header";
import { Authorization } from "../modules/authorization/Authorization";
import { MessengerPage } from "./MessengerPage";

export class HomePage extends MessengerPage {
  constructor(root: string) {
    super({
      name: "HomePage",
      componentsList: [
        new Header({ state: stateHeader }),
        new Authorization({ state: stateAuthorization }),
      ],
      root,
    });
  }
}
