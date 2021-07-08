export function createHeader() {
  return `
  <{{ dom }} class="{{ className }}">
    <a href="{{logoLink}}" class="{{ classLogoLinkName }}" data-page="{{logoLinkDataPage}}">
      <img src="{{ logoImgUrl }}" alt="{{ logoTxt }}" />
      <span>{{ logoTxt }}</span>
    </a>
  </{{dom}}>
`;
}
