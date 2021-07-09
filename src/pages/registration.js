import { state as stateHeader } from '../modules/header/state';
import { state as stateRegistration } from '../modules/registration/state';

import { createHeader } from '../modules/header/header.tmpl';
import { createRegistration } from '../modules/registration/registration.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  return (
    returnTmpl(createHeader(), stateHeader) +
    returnTmpl(createRegistration(), stateRegistration)
  );
}
