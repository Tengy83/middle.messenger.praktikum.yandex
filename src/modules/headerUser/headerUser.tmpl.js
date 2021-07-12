export function createHeader() {
  return `<header class="{{ className }}">
    <a href="{{logoLink}}" class="{{ classLogoLinkName }}" data-page="{{logoLinkDataPage}}">
      <img src="{{ logoImgUrl }}" alt="{{ logoTxt }}" />
      <span>{{ logoTxt }}</span>
    </a>
    <a href="{{userLink}}" class="{{ classUserLink }}" data-page="{{userLinkDataPage}}">
      <img src="{{ userImgUrl }}" class="{{ classUserImg }}" alt="{{ userName }}" />
      <span>{{ userName }}</span>
      <img src="./img/menu_tres_icon_w.svg"" />
    </a>
  </header>`;
}
