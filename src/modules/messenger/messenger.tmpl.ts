export function createMessenger(form: string = ""): string {
  return `<h1 class="{{ titleClass }}">
      {{title}}
    </h1>
    <ul class="message__list message-list">
      
    </ul>
    ${form}`;
}
