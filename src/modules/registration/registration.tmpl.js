export function createRegistration(form = '') {
  return `<div class="{{ className }}">
    <h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    ${form}
  </div>`;
}