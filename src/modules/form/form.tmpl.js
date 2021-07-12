export function createForm(formState) {
  const inputs = createInputs(formState.inputs) || '';
  const buttons = createButtons(formState.buttons) || '';

  return `<form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">${inputs}${buttons}</form>`;
}

function createInputs(inputsState) {
  let inputsTmpl = '';
  Object.keys(inputsState).forEach(function (inputName) {
    inputsTmpl += `<input type="{{form.inputs.${inputName}.type}}" name="{{form.inputs.${inputName}.name}}" class="{{form.inputs.${inputName}.className}}" placeholder="{{form.inputs.${inputName}.placeholder}}" />`;
  });
  return inputsTmpl;
}
function createButtons(buttonsState) {
  let buttonsTmpl = '';
  const hrDom = `<hr />`;

  Object.entries(buttonsState).forEach(function (buttonState) {
    const hr = buttonState[1]['hr'] ? hrDom : '';
    const href = buttonState[1]['href']
      ? `href="{{form.buttons.${buttonState[0]}.link}}"`
      : '';
    const dataPage = buttonState[1]['dataPage']
      ? `data-page="{{form.buttons.${buttonState[0]}.dataPage}}"`
      : '';

    buttonsTmpl += `${hr}<{{form.buttons.${buttonState[0]}.tag}} ${href} class="{{form.buttons.${buttonState[0]}.className}}" ${dataPage}>{{form.buttons.${buttonState[0]}.title}}</{{form.buttons.${buttonState[0]}.tag}}>`;
  });
  return buttonsTmpl;
}
