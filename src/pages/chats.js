import { state as stateHeader } from '../modules/headerUser/state';
import { state as stateUsersList } from '../modules/usersList/state';
import { contentWrapper as chatsContentWrapper } from '../layouts/contentWrapper';

import { createHeader } from '../modules/headerUser/headerUser.tmpl';
import { createUsersList } from '../modules/usersList/usersList.tmpl';
import { createChatStub } from '../modules/chatStub/chatStub.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  let template = returnTmpl(createHeader(), stateHeader);
  let templateWrapper =
    returnTmpl(createUsersList(), stateUsersList) + createChatStub();

  return template + chatsContentWrapper(templateWrapper, 'messenger-wrapper');
}
