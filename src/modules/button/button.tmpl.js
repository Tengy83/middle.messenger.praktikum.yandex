export function createButton(buttonState, buttonName) {
  const hr = buttonState['hr'] ? `<hr />` : '';
  const href = buttonState['href']
    ? `href="{{form.buttons.${buttonName}.link}}"`
    : '';
  const dataPage = buttonState['dataPage']
    ? `data-page="{{form.buttons.${buttonName}.dataPage}}"`
    : '';

  return `${hr}<{{form.buttons.${buttonName}.tag}} ${href} class="{{form.buttons.${buttonName}.className}}" ${dataPage}>{{form.buttons.${buttonName}.title}}</{{form.buttons.${buttonName}.tag}}>`;
}
