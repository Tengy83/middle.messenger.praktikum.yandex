import { state as stateHeader } from '../modules/header/stateUser';
import { state as stateUsers } from '../modules/users/state';
import { state as stateMessenger } from '../modules/messenger/state';

import { Header } from '../modules/header/Header';
import { Users } from '../modules/users/Users';
import { Messenger } from '../modules/messenger/Messenger';
import { MessengerPage } from './MessengerPage';

export class MessagePage extends MessengerPage {
  constructor(root: string) {
    super({
      name: 'MessagePage',
      componentsList: [new Header({ state: stateHeader }), new Users({ state: stateUsers }), new Messenger({ state: stateMessenger })],
      root,
    });
  }
  createPage(): DocumentFragment {
    const header: any = this.componentsList[0];
    const users: any = this.componentsList[1];
    const messenger: any = this.componentsList[2];

    let templateWrapper = new DocumentFragment();
    templateWrapper.append(users.getContent());
    templateWrapper.append(messenger.getContent());

    let wrapper = document.createElement('div');
    wrapper.className = 'messenger-wrapper';
    wrapper.append(templateWrapper);

    let fragment = new DocumentFragment();
    fragment.append(header.getContent());
    fragment.append(wrapper);
    return fragment;
  }
}
