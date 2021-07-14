export function createEditUser(form = '') {
  return `<div class="{{ className }}">
    <img src="{{ img }}" alt="{{ title }}" />
    <h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    ${form}
  </div>`;
}
