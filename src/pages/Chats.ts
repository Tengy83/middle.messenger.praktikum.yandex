import { state as stateHeader } from '../modules/header/stateUser';
import { state as stateUsers } from '../modules/users/state';
import { state as stateChatStub } from '../modules/chatStub/state';

import { Header } from '../modules/header/Header';
import { Users } from '../modules/users/Users';
import { ChatStub } from '../modules/chatStub/ChatStub';
import { MessengerPage } from './MessengerPage';

export class ChatsPage extends MessengerPage {
  constructor(root: string) {
    super({
      name: 'ChatsPage',
      componentsList: [new Header({ state: stateHeader }), new Users({ state: stateUsers }), new ChatStub({ state: stateChatStub })],
      root,
    });
  }
  createPage(): DocumentFragment {
    const header: any = this.componentsList[0];
    const users: any = this.componentsList[1];
    const chatStub: any = this.componentsList[2];

    let templateWrapper = new DocumentFragment();
    templateWrapper.append(users.getContent());
    templateWrapper.append(chatStub.getContent());

    let wrapper = document.createElement('div');
    wrapper.className = 'messenger-wrapper';
    wrapper.append(templateWrapper);

    let fragment = new DocumentFragment();
    fragment.append(header.getContent());
    fragment.append(wrapper);
    return fragment;
  }
}
