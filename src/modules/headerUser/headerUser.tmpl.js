export function createHeader() {
  return `
  <{{ dom }} class="{{ className }}">
    <a href="{{logoLink}}" class="{{ classLogoLinkName }}" onclick="pageRenderListaner(this)" data-page="{{logoLinkDataPage}}">
      <img src="{{ logoImgUrl }}" alt="{{ logoTxt }}" />
      <span>{{ logoTxt }}</span>
    </a>
    <a href="{{userLink}}" class="{{ classUserLink }}" onclick="pageRenderListaner(this)" data-page="{{userLinkDataPage}}">
      <img src="{{ userImgUrl }}" class="{{ classUserImg }}" alt="{{ userName }}" />
      <span>{{ userName }}</span>
      <img src="./img/menu_tres_icon_w.svg"" />
    </a>
  </{{dom}}>
`;
}
