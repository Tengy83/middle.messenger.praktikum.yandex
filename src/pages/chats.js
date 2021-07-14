import { state as stateHeader } from '../modules/header/stateUser';
import { state as stateUsersList } from '../modules/usersList/state';

import { contentWrapper as chatsContentWrapper } from '../layouts/contentWrapper';

import { Header } from '../modules/header/Header';
import { UsersList } from '../modules/usersList/UsersList';

import { createChatStub } from '../modules/chatStub/chatStub.tmpl';

export function createPage() {
  const header = new Header({ state: stateHeader });
  const usersList = new UsersList({ state: stateUsersList });

  let templateWrapper = usersList.toHtml() + createChatStub();

  return (
    header.toHtml() + chatsContentWrapper(templateWrapper, 'messenger-wrapper')
  );
}
