import { capitalize } from '../utils/utils';

export class DomListener {
  name: string;
  id?: HTMLElement | null;
  listeners: string[] | null;

  constructor(name: string = '', listeners: string[] = []) {
    this.name = name;
    this.listeners = listeners;
  }

  initDOMListeners(componentDOM: any) {
    const id = componentDOM.dataset.id;
    this.id = document.querySelector(`[data-id="${id}"]`);
    let comp: any = this;
    if (!this.id) {
      throw new Error(`No "id" provided for DomListener!`);
    }
    if (this.listeners) {
      this.listeners.forEach((listener) => {
        const method = this.getMethodName(listener);
        if (!comp[method]) {
          throw new Error(`Method ${method} is not implemented in ${this.name} Component`);
        }
        comp[method] = comp[method].bind(this);
        if (this.id) this.id.addEventListener(listener, comp[method]);
      });
    }
  }

  removeDOMListeners() {
    let comp: any = this;
    if (this.listeners) {
      this.listeners.forEach((listener) => {
        const method = this.getMethodName(listener);
        if (this.id) this.id.removeEventListener(listener, comp[method]);
      });
    }
  }

  getMethodName(eventName: string): string {
    return 'on' + capitalize(eventName);
  }
}
