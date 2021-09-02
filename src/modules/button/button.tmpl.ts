export function createButton(
  buttonState: { [key: string]: string },
  buttonName: string,
  form: boolean = false
): string {
  const formLink: string = form ? 'form.' : '';
  const hr: string = buttonState['hr'] ? `<hr />` : '';
  const href: string = buttonState['href']
    ? `href="{{${formLink}buttons.${buttonName}.link}}"`
    : '';
  const dataPage: string = buttonState['dataPage']
    ? `data-page="{{${formLink}buttons.${buttonName}.dataPage}}"`
    : '';

  return `${hr}<{{${formLink}buttons.${buttonName}.tag}} ${href} class="{{${formLink}buttons.${buttonName}.className}}" ${dataPage}>{{${formLink}buttons.${buttonName}.title}}</{{${formLink}buttons.${buttonName}.tag}}>`;
}
