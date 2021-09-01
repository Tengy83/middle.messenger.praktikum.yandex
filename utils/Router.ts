import { Route } from "./Route";
import { MessengerPage } from "../src/pages/MessengerPage";

import { UserAPI } from "../utils/api/UserAPI";
import { URL_LINKS } from "../constants";

export class Router {
  userAPI: UserAPI;

  constructor(rootQuery) {
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

  use(pathname: string, view: MessengerPage) {
    const route = new Route(pathname, view, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    window.onclick = ((event) => {
      let pageLink = event.target.closest("[data-page]");
      if (pageLink) {
        let pageUrl = pageLink.dataset.page;

        this.go(`/${pageUrl === "home" || pageUrl === "/" ? "" : pageUrl}`);
      }
    }).bind(this);

    this._onRoute(window.location.pathname);
  } // запустить роутер

  _onRoute(pathname) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    this.userAPI.request().then((r) => {
      let path = document.location.pathname;
      if (
        r.status !== 200 &&
        path !== URL_LINKS["home"] &&
        path !== URL_LINKS["error404"] &&
        path !== URL_LINKS["signUp"]
      ) {
        this.go(URL_LINKS["home"]);
      }
      return r;
    });

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }

  back() {
    this.history.back();
  } // переход назад по истории браузера
  forward() {
    this.history.forward();
  } // переход вперёд по истории браузера
}
