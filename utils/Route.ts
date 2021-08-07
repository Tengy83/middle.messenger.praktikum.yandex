import { MessengerPage } from "../src/pages/MessengerPage";
import { isEqual } from "../utils/utils";
import { render } from "../utils/utils";

export class Route {
  _pathname: string;
  _pageComponent: MessengerPage;
  _page: null | MessengerPage;
  _props: object;

  constructor(pathname: string, view: MessengerPage, props: object) {
    this._pathname = pathname;
    this._pageComponent = view;
    this._page = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._page) {
      this._page.hide();
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._page) {
      this._page = new this._pageComponent();
      render(this._props.rootQuery, this._page);
      this._page.renderDOMListeners();
      return;
    }

    this._page.show();
  }
}
