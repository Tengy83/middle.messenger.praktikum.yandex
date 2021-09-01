export function createUsersList(
  usersListItems: string = "",
  id: string
): string {
  return `<ul class="user-list" data-id="${id}">${usersListItems}</ul>`;
}
