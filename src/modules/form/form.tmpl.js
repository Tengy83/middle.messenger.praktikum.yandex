import { createInput } from './components/input/input.tmpl';
import { createButton } from '../button/button.tmpl';

export function createForm(formState) {
  const inputs = createComponentsTmpl(formState.inputs, createInput) || '';
  const buttons = createComponentsTmpl(formState.buttons, createButton) || '';

  return `<form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">${inputs}${buttons}</form>`;
}

function createComponentsTmpl(state, createTmpl) {
  let tmpl = '';
  Object.entries(state).forEach(function (compState) {
    tmpl += createTmpl(compState[1], compState[0]);
  });
  return tmpl;
}
