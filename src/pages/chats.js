import { Templator } from '../../utils/Templator';
import { state } from '../../state';
import { contentWrapper } from '../../utils/utils';

import { createHeader } from '../modules/headerUser/headerUser.tmpl';
import { createUsersList } from '../modules/usersList/usersList.tmpl';
import { createChatStub } from '../modules/chatStub/chatStub.tmpl';

export function createPage() {
  const modules = {
    Header: createHeader,
    UsersList: createUsersList,
  };

  let template = '';
  let templateWrapper = '';

  Object.keys(modules).forEach(function (moduleName) {
    const moduleTmpl = returnTmpl(modules[moduleName](), moduleName);
    if (moduleName !== 'Header') {
      templateWrapper += moduleTmpl;
    } else {
      template += moduleTmpl;
    }
  });

  templateWrapper += createChatStub();

  return template.trim() + contentWrapper(templateWrapper.trim());
}

function returnTmpl(template, stateModuleName) {
  const tmpl = new Templator(template);
  return tmpl.compile(state.store[stateModuleName]);
}
