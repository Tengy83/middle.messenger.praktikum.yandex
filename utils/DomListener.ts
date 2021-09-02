import { capitalize } from "../utils/utils";

export class DomListener {
  name: string;
  id: HTMLElement | null;
  listeners: string[] | null;

  constructor(name = "", listeners = []) {
    this.name = name;
    this.listeners = listeners;
  }

  initDOMListeners(componentDOM) {
    const id = componentDOM.dataset.id;
    this.id = document.querySelector(`[data-id="${id}"]`);
    if (!this.id) {
      throw new Error(`No "id" provided for DomListener!`);
    }
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);
      if (!this[method]) {
        throw new Error(
          `Method ${method} is not implemented in ${this.name} Component`
        );
      }
      this[method] = this[method].bind(this);
      this.id.addEventListener(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);
      this.id.removeEventListener(listener, this[method]);
    });
  }

  // input => onInput
  getMethodName(eventName: string): string {
    return "on" + capitalize(eventName);
  }
}
