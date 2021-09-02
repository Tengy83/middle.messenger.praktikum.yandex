import { state as stateHeader } from "../modules/header/stateUser";
import { state as stateUsersList } from "../modules/usersList/state";
import { state as stateChatStub } from "../modules/chatStub/state";

import { contentWrapper as chatsContentWrapper } from "../layouts/contentWrapper";

import { Header } from "../modules/header/Header";
import { UsersList } from "../modules/usersList/UsersList";
import { ChatStub } from "../modules/chatStub/ChatStub";
import { MessengerPage } from "./MessengerPage";

export class ChatsPage extends MessengerPage {
  constructor(root: string) {
    super({
      name: "ChatsPage",
      componentsList: [
        new Header({ state: stateHeader }),
        new UsersList({ state: stateUsersList }),
        new ChatStub({ state: stateChatStub }),
      ],
      root,
    });
  }
  createPage(): DocumentFragment {
    const header = this.componentsList[0];
    const usersList = this.componentsList[1];
    const chatStub = this.componentsList[2];

    let templateWrapper = new DocumentFragment();
    templateWrapper.append(usersList.getContent());
    templateWrapper.append(chatStub.getContent());

    let wrapper = document.createElement("div");
    wrapper.className = "messenger-wrapper";
    wrapper.append(templateWrapper);

    let fragment = new DocumentFragment();
    fragment.append(header.getContent());
    fragment.append(wrapper);
    return fragment;
  }
}
