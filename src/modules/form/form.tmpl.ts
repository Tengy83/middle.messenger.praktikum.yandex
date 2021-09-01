export function createForm(
  inputs: string = "",
  buttons: string = "",
  id: string
): string {
  return `<form action="{{form.action}}" enctype="{{form.enctype}}" method="{{form.method}}" class="{{form.className}}" data-id="${id}">${inputs}${buttons}</form>`;
}
