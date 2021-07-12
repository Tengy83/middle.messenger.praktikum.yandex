import { state as stateHeader } from '../modules/header/state';
import { state as stateChangePassword } from '../modules/changePassword/state';

import { createHeader } from '../modules/header/header.tmpl';
import { createChangePassword } from '../modules/changePassword/changePassword.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  return (
    returnTmpl(createHeader(), stateHeader) +
    returnTmpl(createChangePassword(), stateChangePassword)
  );
}
