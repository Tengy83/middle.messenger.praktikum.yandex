import { state as stateHeader } from '../modules/header/state';
import { state as stateAuthorization } from '../modules/authorization/state';

import { createHeader } from '../modules/header/header.tmpl';
import { createAuthorization } from '../modules/authorization/authorization.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  return (
    returnTmpl(createHeader(), stateHeader) +
    returnTmpl(createAuthorization(), stateAuthorization)
  );
}
