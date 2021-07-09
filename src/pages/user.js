import { state as stateHeader } from '../modules/header/state';
import { state as stateUser } from '../modules/user/state';

import { createHeader } from '../modules/header/header.tmpl';
import { createUser } from '../modules/user/user.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  return (
    returnTmpl(createHeader(), stateHeader) +
    returnTmpl(createUser(), stateUser)
  );
}
