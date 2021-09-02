export function createChangePassword(form: string = ""): string {
  return `<h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    ${form}`;
}
