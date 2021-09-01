export function createUsers(
  searchForm: string = "",
  usersList: string = ""
): string {
  return `${searchForm}
  <a href="{{newChatLink.link}}" class="{{newChatLink.className}}" disabled>{{newChatLink.title}}</a>
  ${usersList}`;
}
