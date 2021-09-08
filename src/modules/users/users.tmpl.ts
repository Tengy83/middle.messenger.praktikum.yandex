export function createUsers(
  searchForm: string = "",
  usersList: string = ""
): string {
  let form = searchForm
    ? `<h4 class="form__title">Добавить юзера в чат:</h4>${searchForm}`
    : "";
  return `${form}
  <a href="{{newChatLink.link}}" class="{{newChatLink.className}}" disabled>{{newChatLink.title}}</a>
  ${usersList}`;
}
