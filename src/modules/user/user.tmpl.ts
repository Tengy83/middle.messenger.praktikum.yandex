export function createUser(buttons: string = ""): string {
  return `<img src="{{ avatar }}" alt="{{ first_name }}" />
    <h1 class="{{ titleClass }}">
      {{first_name}} - id: {{id}}
    </h1>
    <div class="user-profile">
      <dl>
        <dt>Почта</dt>
        <dd>{{ email }}</dd>
        <dt>Логин</dt>
        <dd>{{ login }}</dd>
        <dt>Имя</dt>
        <dd>{{ first_name }}</dd>
        <dt>Фамилия</dt>
        <dd>{{ second_name }}</dd>
        <dt>Имя в чате</dt>
        <dd>{{ display_name }}</dd>
        <dt>Телефон</dt>
        <dd>{{ phone }}</dd>
      </dl>
      ${buttons}
    </div>`;
}
