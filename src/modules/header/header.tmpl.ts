export function createHeader(userLink: string): string {
  return `<a href="{{logoLink}}" class="{{ classLogoLinkName }}" data-page="{{logoLinkDataPage}}">
      <img src="{{ logoImgUrl }}" alt="{{ logoTxt }}" />
      <span>{{ logoTxt }}</span>
    </a>
    ${userLink}
    </header>`;
}
