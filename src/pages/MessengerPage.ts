import { render } from '../../utils/utils';
import { PageOptions } from '../../utils/interfaces';
import { MessengerModule } from '../modules/MessengerModule';

export class MessengerPage {
  name: string;
  pageDOM: HTMLElement;
  componentsList: object[];

  constructor(pageOptions: PageOptions) {
    this.name = pageOptions.name;
    this.pageDOM = this.createPageDOM(this.name);
    this.componentsList = pageOptions.componentsList;
  }

  createPageDOM(name: string): HTMLElement {
    let dom = document.createElement('div');
    dom.classList.add('page');
    dom.classList.add(name.toLowerCase());
    return dom;
  }

  createPage(): DocumentFragment {
    let fragment = new DocumentFragment();
    this.componentsList.forEach((component: any) => {
      fragment.append(component.getContent());
    });

    return fragment;
  }

  render(): HTMLElement {
    this.pageDOM.append(this.createPage());

    return this.pageDOM;
  }
  renderDOMListeners() {
    this.componentsList.forEach((component) => {
      this._initDOMListeners(component);
    });
  }

  destroy(): void {
    this.componentsList.forEach((component: any) => {
      component.destroy();
      this._destroyDOMListeners(component);
    });

    this.pageDOM.remove();
  }

  _destroyDOMListeners(component: any): void {
    component.getInternalComponentsList().forEach((comp: any) => {
      this._destroyDOMListeners(comp);
    });
    const id = component.getId();
    if (id) {
      component.destroy();
    }
  }
  _initDOMListeners(component: any): void {
    component.getInternalComponentsList().forEach((comp: any) => {
      this._initDOMListeners(comp);
    });
    const id = component.getId();
    if (id) {
      component.initDOMListeners(component.getContent());
    }
  }

  show() {
    this.pageDOM.style.display = 'grid';
  }

  hide() {
    this.pageDOM.style.display = 'none';
  }
}
