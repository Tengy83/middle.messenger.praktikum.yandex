import { TEMPLATE_REGEXP } from '../constants';
import { getObjValue } from './utils';

export class Templator {
  private _template: string;

  constructor(template: string = '') {
    this._template = template;
  }

  setTemplate(template: string): void {
    this._template = template;
  }

  compile(ctx: object): string {
    return this._compileTemplate(ctx);
  }

  _compileTemplate(ctx: object): string {
    let tmpl: string = this._template;
    let key: string[] = [];
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
