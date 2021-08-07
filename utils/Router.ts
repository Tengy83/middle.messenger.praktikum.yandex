import { Route } from "./Route";

export class Router {
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    // Вместо трёх точек напишем отдельную сущность — об этом речь пойдёт ниже
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    // Возврат this — основа паттерна "Builder" («Строитель»)
    return this;
  }

  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = ((event) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    window.onclick = ((event) => {
      let pageLink = event.target.closest("a[data-page]");
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
