import { Templator } from '../../utils/Templator';

export class MessengerModule {
  constructor(options = {}) {
    this.name = options.name || '';
    this.state = options.state;
    this.template = options.template || {};
    this.tmpl = new Templator(this.template);

    this.prepare();
  }

  prepare() {}

  setTemplate(template) {
    this.template = template;
    this.tmpl.setTemplate(template);
  }

  getTemplate() {
    return this.template;
  }

  toHtml() {
    return this.tmpl.compile(this.state);
  }

  createComponentsTmpl(stateComponents, createComponentTmpl) {
    let tmpl = '';
    Object.entries(stateComponents).forEach(function (compState) {
      tmpl += createComponentTmpl(compState[1], compState[0]);
    });
    return tmpl;
  }
}
