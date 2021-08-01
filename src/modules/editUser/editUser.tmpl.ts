export function createEditUser(form: string = ""): string {
  return `<img src="{{ img }}" alt="{{ title }}" />
    <h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    ${form}`;
}
