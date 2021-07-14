import { MessengerModule } from '../MessengerModule';

import { createForm } from './form.tmpl';
import { createInput } from './components/input/input.tmpl';
import { createButton } from '../button/button.tmpl';

export class Form extends MessengerModule {
  constructor(options) {
    super({
      name: 'Form',
      state: options.state,
      ...options,
    });
  }

  prepare() {
    this.createTemplate();
  }

  createTemplate() {
    const inputs =
      this.createComponentsTmpl(this.state.inputs, createInput) || '';
    const buttons =
      this.createBtnComponentsTmpl(this.state.buttons, createButton) || '';

    this.setTemplate(createForm(inputs, buttons));
  }

  createBtnComponentsTmpl(stateComponents, createComponentTmpl) {
    let tmpl = '';
    Object.entries(stateComponents).forEach(function (compState) {
      tmpl += createComponentTmpl(compState[1], compState[0], true);
    });
    return tmpl;
  }

  getTemplate() {
    return this.template;
  }
}
