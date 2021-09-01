export function createUserLink(): string {
  return `<a href="{{userLink}}" class="{{ classUserLink }}" data-page="{{userLinkDataPage}}">
  <img src="{{ userImgUrl }}" class="{{ classUserImg }}" alt="" />
  <span></span>
  <img src="./img/menu_tres_icon_w.svg"" />
</a>`;
}
