export function createUsersListItem(
  chatId: string,
  id: string,
  imgUrl: string = "../img/user_icon.svg",
  name: string,
  text: string
): string {
  return `<li class="user-list__item user-item" data-id="${id}" data-action="open">
  <img
    src="${imgUrl}"
    alt=""
    class="user-item__icon"
  />
  <div class="user-item__content">
  <span class="user-item__title">${name}</span
  ><small class="user-item__text">${text}</small
  >
  </div>
  <a href="#" class="user-item__delete" title="Удалить из Чата"
  data-id="${id}" data-chat="${chatId}" data-action="delete"></a>
</li>`;
}
