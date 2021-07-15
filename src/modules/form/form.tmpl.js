export function createForm(inputs = '', buttons = '') {
  return `<form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">${inputs}${buttons}</form>`;
}
