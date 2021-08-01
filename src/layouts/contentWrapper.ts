export function contentWrapper(content: string, classWrapper: string): string {
  return `
  <div class="${classWrapper}">
    ${content}
  </div>
  `;
}
