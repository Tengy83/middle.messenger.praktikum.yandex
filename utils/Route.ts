import { MessengerPage } from '@pages/MessengerPage';
import { isEqual } from '@utils/utils';
import { render } from '@utils/utils';

export class Route {
  _pathname: any;
  _pageComponent: any;
  _page: any;
  _props: any;

  constructor(pathname: string, view: object, props: object) {
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

  match(pathname: any): boolean {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._page) {
      this._page = new this._pageComponent(this._props.rootQuery);
      render(this._props.rootQuery, this._page);
      this._page.renderDOMListeners();
      return;
    }

    this._page.show();
  }
}
