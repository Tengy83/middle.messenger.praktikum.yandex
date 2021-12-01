import { Options } from '@utils/interfaces';
import { v4 as makeUUID } from 'uuid';
import { Templator } from '@utils/Templator';
import { EventBus } from '@utils/EventBus';
import { DomListener } from '@utils/DomListener';

enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export abstract class MessengerModule extends DomListener {
  readonly name: string;
  element?: HTMLElement | null;
  _id?: string | null;
  state: any;
  template: string;
  tmpl: Templator;
  eventBus: Function;
  internalComponentsList: object[] | null;

  constructor(options: Options) {
    super(options.name, options.listeners);
    const eventBus = new EventBus();

    this.name = options.name || '';
    if (options.listeners) {
      this._id = makeUUID();
    }

    this.state = this._makePropsProxy(options.state);
    this.internalComponentsList = options.internalComponentsList || [];
    this.template = options.template || '';
    this.tmpl = new Templator(this.template);
    this.eventBus = () => eventBus;

    this.prepare();

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  prepare() {}

  _registerEvents(eventBus: any) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName = 'div', className } = this.state;
    const newElement = this._createDocumentElement(tagName);
    if (className) {
      newElement.className = className;
    }
    if (this._id) {
      newElement.setAttribute('data-id', this._id);
    }
    this.element = newElement;
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps?: any) {}

  _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setState = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.state, nextProps);
  };

  _render(): void {
    if (this.element) this.element.innerHTML = this.tmpl.compile(this.state);
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;

        self.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  destroy() {
    if (this._id) {
      this.removeDOMListeners();
    }
  }

  setTemplate(template: string): void {
    this.template = template;
    this.tmpl.setTemplate(template);
  }

  getTemplate(): string {
    return this.template;
  }

  toHtml(): string {
    return this.tmpl.compile(this.state);
  }

  createComponentsTmpl(stateComponents: object, createComponentTmpl: any): string {
    let tmpl = '';
    Object.entries(stateComponents).forEach(function (compState) {
      tmpl += createComponentTmpl(compState[1], compState[0]);
    });
    return tmpl;
  }

  getId(): string | null | undefined {
    return this._id;
  }

  getInternalComponentsList(): object[] | null {
    return this.internalComponentsList;
  }
  addToInternalComponentsList(module: MessengerModule): number {
    return this.internalComponentsList ? this.internalComponentsList.push(module) : 0;
  }
}
