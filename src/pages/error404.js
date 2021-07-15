import { state as stateHeader } from '../modules/header/state';
import { state as stateError } from '../modules/error/state';

import { createHeader } from '../modules/header/header.tmpl';
import { createError } from '../modules/error/error.tmpl';

import { returnTmpl } from '../../utils/utils';

export function createPage() {
  return (
    returnTmpl(createHeader(), stateHeader) +
    returnTmpl(createError(), stateError)
  );
}
