export class EventBus {
  private _listeners: Record<string, [Function]> | null;

  constructor() {
    this._listeners = {};
  }

  on(event: string, callback: Function): void {
    if (!this._listeners[event]) {
      this._listeners[event] = [callback];
    }

    this._listeners[event].push(callback);
  }

  off(event: string, callback: Function): void {
    if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event] = this._listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: any): void {
    if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}
