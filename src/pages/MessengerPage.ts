import { render } from "../../utils/utils";
import { PageOptions } from "../../utils/interfaces";
import { MessengerModule } from "../modules/MessengerModule";

export class MessengerPage {
  root: string;
  name: string;
  componentsList: MessengerModule[];

  constructor(pageOptions: PageOptions) {
    this.name = pageOptions.name;
    this.componentsList = pageOptions.componentsList;
    this.root = pageOptions.root;
  }

  createPage(): DocumentFragment {
    let fragment = new DocumentFragment();
    this.componentsList.forEach((component) => {
      fragment.append(component.getContent());
    });

    return fragment;
  }

  render(): void {
    render(this.root, this.createPage());
    this.componentsList.forEach((component) => {
      this._initDOMListeners(component);
    });
  }
  destroy(): void {
    this.componentsList.forEach((component) => {
      component.destroy();
      this._destroyDOMListeners(component);
    });
  }

  _destroyDOMListeners(component): void {
    component.getInternalComponentsList().forEach((comp) => {
      this._destroyDOMListeners(comp);
    });
    const id = component.getId();
    if (id) {
      component.destroy();
    }
  }
  _initDOMListeners(component): void {
    component.getInternalComponentsList().forEach((comp) => {
      this._initDOMListeners(comp);
    });
    const id = component.getId();
    if (id) {
      component.initDOMListeners(component.getContent());
    }
  }
}
