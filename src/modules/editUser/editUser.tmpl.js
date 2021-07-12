import { state } from './state';
import { createForm } from '../form/form.tmpl';

export function createEditUser() {
  return `<div class="{{ className }}">
    <img src="{{ img }}" alt="{{ title }}" />
    <h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    ${createForm(state.form)}
  </div>`;
}
