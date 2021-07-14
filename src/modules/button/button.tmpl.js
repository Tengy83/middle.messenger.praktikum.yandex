export function createButton(buttonState, buttonName, form = false) {
  const formLink = form ? 'form.' : '';
  const hr = buttonState['hr'] ? `<hr />` : '';
  const href = buttonState['href']
    ? `href="{{${formLink}buttons.${buttonName}.link}}"`
    : '';
  const dataPage = buttonState['dataPage']
    ? `data-page="{{${formLink}buttons.${buttonName}.dataPage}}"`
    : '';

  return `${hr}<{{${formLink}buttons.${buttonName}.tag}} ${href} class="{{${formLink}buttons.${buttonName}.className}}" ${dataPage}>{{${formLink}buttons.${buttonName}.title}}</{{${formLink}buttons.${buttonName}.tag}}>`;
}
