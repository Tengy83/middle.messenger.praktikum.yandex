import { Templator } from '../../utils/Templator';
import { state } from '../../state';

import { createHeader } from '../modules/header/header.tmpl';
import { createUser } from '../modules/user/user.tmpl';

export function createPage() {
  const modules = {
    Header: createHeader,
    User: createUser,
  };

  let template = '';

  Object.keys(modules).forEach(function (moduleName) {
    const moduleTmpl = returnTmpl(modules[moduleName](), moduleName);
    template += moduleTmpl;
  });

  return template.trim();
}

function returnTmpl(template, stateModuleName) {
  const tmpl = new Templator(template);
  return tmpl.compile(state.store[stateModuleName]);
}
