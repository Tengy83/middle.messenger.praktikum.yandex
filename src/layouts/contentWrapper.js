export function contentWrapper(content, classWrapper) {
  return `
  <div class="${classWrapper}">
    ${content}
  </div>
  `;
}
