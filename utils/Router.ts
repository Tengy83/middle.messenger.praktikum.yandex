import { Route } from './Route';
import { MessengerPage } from '@pages/MessengerPage';

import { UserAPI } from '@utils/api/UserAPI';
import { URL_LINKS } from '../constants';

export class Router {
  userAPI?: UserAPI;
  static __instance: any;
  routes: any;
  history;
  _currentRoute?: { leave: () => void } | null;
  _rootQuery;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;

    this.userAPI = new UserAPI();
  }

  use(pathname: string, view: object) {
    const route = new Route(pathname, view, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      const currentTarget: any = <HTMLInputElement>event.currentTarget;
      this._onRoute(currentTarget.location.pathname);
    };

    window.onclick = (event) => {
      const pageLink = (<HTMLInputElement>event.target).closest('[data-page]');
      if (pageLink) {
        const pageUrl = pageLink.getAttribute('data-page');

        this.go(`/${pageUrl === 'home' || pageUrl === '/' ? '' : pageUrl}`);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this.userAPI) {
      this.userAPI.request().then((r) => {
        const path = document.location.pathname;
        if (r.status !== 200 && path !== URL_LINKS.home && path !== URL_LINKS.error404 && path !== URL_LINKS.signUp) {
          this.go(URL_LINKS.home);
        } else if (r.status === 200 && path === URL_LINKS.home) {
          this.go(URL_LINKS.chats);
        }
        return r;
      });
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname: string) {
    if (this.history) {
      this.history.pushState({}, '', pathname);
    }

    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route: any) => route.match(pathname));
  }

  back() {
    if (this.history) this.history.back();
  }
  forward() {
    if (this.history) this.history.forward();
  }
}
