import { state as stateHeader } from '../modules/header/state';
import { state as stateEditUser } from '../modules/editUser/state';

import { createHeader } from '../modules/header/header.tmpl';
import { createEditUser } from '../modules/editUser/editUser.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  return (
    returnTmpl(createHeader(), stateHeader) +
    returnTmpl(createEditUser(), stateEditUser)
  );
}
