import { Options } from "../../../utils/interfaces";
import { v4 as makeUUID } from "uuid";

import { MessengerModule } from "../MessengerModule";

import { createForm } from "./form.tmpl";
import { createInput } from "./components/input/input.tmpl";
import { createButton } from "../button/button.tmpl";

export class Form extends MessengerModule {
  _id: string;

  constructor(options: Options) {
    super({
      name: "Form",
      state: options.state,
      listeners: ["submit", "blur", 'input'],
      ...options,
    });

    this._id = makeUUID();
  }

  prepare(): void {
    this.createTemplate();
  }

  _createResources() {
    const { className, action, method } = this.state;
    const newElement = this._createDocumentElement("FORM");
    newElement.className = className || "form";
    newElement.setAttribute("data-id", this._id);    
    newElement.setAttribute("action", action);
    newElement.setAttribute("method", method);
    this.element = newElement;
  }

  createTemplate(): void {
    const inputs =
      this.createComponentsTmpl(this.state.inputs, createInput) || '';
    const buttons =
      this.createBtnComponentsTmpl(this.state.buttons, createButton) || "";

    this.setTemplate(createForm(inputs, buttons, this._id));
  }

  createComponentsTmpl(stateComponents, createComponentTmpl): string {
    let tmpl = "";
    Object.entries(stateComponents).forEach(function (compState) {
      tmpl += createComponentTmpl(
        "placeholder" in compState[1],
        "value" in compState[1],
        compState[0]
      );
    });
    return tmpl;
  }

  returnRegExp(inputType: string): string {
    let regExp = ''
    switch (inputType) {
      case "password":
        regExp = "(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}$";
        break
      case "phone":
        regExp = "^[d]{1} ([d]{2,3}) [d]{2,3}-[d]{2,3}-[d]{2,3}$";
        break
      case "email":
        regExp = "^[-w.]+@([A-z0-9][-A-z0-9]+.)+[A-z]{2,4}$";
        break
      default:
        regExp = "^[а-яА-ЯёЁa-zA-Z0-9-_\.]{3,20}$";
    }

    return regExp
  }.bind(this)

  createBtnComponentsTmpl(stateComponents, createComponentTmpl): string {
    let tmpl = "";
    Object.entries(stateComponents).forEach(function (compState) {
      tmpl += createComponentTmpl(compState[1], compState[0], true);
    });
    return tmpl;
  }

  getTemplate(): string {
    return this.template;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    let data = {};
    let isValidateForm = true

    Array.from(event.target.elements)
      .filter((element) => element.tagName === "INPUT")
      .forEach((input) => {
        if(!this.isValidateInput(input)){
          input.classList.add('error')
          data[input.getAttribute("name")] = 'Not validated';
          isValidateForm = false
        } else {
          data[input.getAttribute("name")] = input.value;
        }
      });

      if(!isValidateForm){
        console.error(`The form ${this._id} did not pass validation`)
      }
    console.log(data);
  }
  onBlur(event: Event) {
    event.preventDefault();
    const input = event.currentTarget
    if(!this.isValidateInput(input)){
      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }
  }

  onInput(event: Event){
    event.preventDefault();
    const input = event.currentTarget
    const value = input.value
    if(value.length > 2 && this.isValidateInput(input) && input.classList.contains('error')){
      input.classList.remove('error')
    }
  }

  isValidateInput(input: HTMLElement):boolean{
    return new RegExp(this.returnRegExp(input.tagName)).test(input.value)
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
      if (method !== "onBlur" && method !== 'onInput') {
        this.id.addEventListener(listener, this[method]);
      } else {
        this.id.querySelectorAll("input").forEach((input) => {
          input.addEventListener(listener, this[method]);
        });
      }
    });
  }
  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);

      if (method !== "onBlur" && method !== 'onInput') {
        this.id.removeEventListener(listener, this[method]);
      } else {
        this.id.querySelectorAll("input").forEach((input) => {
          input.removeEventListener(listener, this[method]);
        });
      }
    });
  }
}
