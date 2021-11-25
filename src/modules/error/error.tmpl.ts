export function createError(): string {
  return `<h1 class="error__title">{{ title }}</h1>
    <div class="error__content">{{ text }}</div>
    <a href="{{link}}" class="error_link"  data-page="{{dataPage}}">{{ linkTitle }}</a>`;
}
