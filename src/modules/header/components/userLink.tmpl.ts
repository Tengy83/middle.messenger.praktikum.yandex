export function createUserLink(): string {
  return `<a href="{{userLink}}" class="{{ classUserLink }}" data-page="{{userLinkDataPage}}">
  <img src="{{ userImgUrl }}" class="{{ classUserImg }}" alt="{{ userName }}" />
  <span>{{ userName }}</span>
  <img src="./img/menu_tres_icon_w.svg"" />
</a>`;
}
