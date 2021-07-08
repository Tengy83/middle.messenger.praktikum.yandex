export function createError() {
  return `
  <{{ dom }} class="{{ className }}">
    <h1 class="error__title">{{ errorTitle }}</h1>
    <div class="error__content">{{ errorText }}</div>
    <a href="{{link}}" class="error_link"  data-page="{{dataPage}}">{{ linkTitle }}</a>
  </{{dom}}>
`;
}
