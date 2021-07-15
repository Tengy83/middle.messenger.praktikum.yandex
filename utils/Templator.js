import { TEMPLATE_REGEXP } from '../constants';
import { getObjValue } from './utils';

export class Templator {
  constructor(template = {}) {
    this._template = template;
  }

  setTemplate(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(ctx);
  }

  _compileTemplate(ctx) {
    let tmpl = this._template;
    let key = null;
    const regExp = TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = getObjValue(ctx, tmplValue);

        if (typeof data === 'function') {
          window[tmplValue] = data;
          tmpl = tmpl.replace(
            new RegExp(key[0], 'gi'),
            `window.${key[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
      }
    }

    return tmpl;
  }
}
