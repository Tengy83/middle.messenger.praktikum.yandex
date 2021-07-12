import { state } from './state';
import { createForm } from '../form/form.tmpl';

export function createChangePassword() {
  return `<div class="{{ className }}">
    <h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    ${createForm(state.form)}
  </div>`;
}
