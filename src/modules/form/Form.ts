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
    return Object.entries(stateComponents).reduce(function (tmpl,compState) {
      return tmpl + createComponentTmpl(
        compState[0],
        "label" in compState[1],
        "placeholder" in compState[1],
        "value" in compState[1]        
      );
    }, '');
  }

  returnRegExp(inputType: string): string {
    let regExp = ''
    switch (inputType) {
      case "password":
        regExp = "(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}$";
        break
      case "tel":
        regExp = "^[0-9-_\(\) +]{7,20}$";
        break
      case "email":
        regExp = "^[-w.]+@([A-z0-9][-A-z0-9]+.)+[A-z]{2,4}$";
        break
      default:
        regExp = "^[а-яА-ЯёЁa-zA-Z0-9-_\.]{3,20}$";
    }
    return regExp
  }.bind(this)

  getErrorText(inputType: string, inputName: string): string{
    let errorText = ''
    let inputN = '';
    switch (inputName){
      case 'login':
        inputN = 'Логина, min. 3 символа'
        break
      case 'first_name':
        inputN = 'Имени, min. 3 символа'
        break
      case 'second_name':
        inputN = 'Фамилии, min. 3 символа'
        break
      default: inputN = 'поля'
    }
    switch (inputType) {
      case "password":
        errorText = "<strong>Некорректное значение Пароля:</strong><br><ul><li>Поле содержит хотя бы одно число</li><li>Поле содержит хотя бы один спецсимвол</li><li>Поле содержит хотя бы одну латинскую букву в нижнем регистре</li><li>Поле содержит хотя бы одну латинскую букву в верхнем регистре</li><li>Поле состоит не менее, чем из 6 вышеупомянутых символов</li></ul>";
        break
      case "tel":
        errorText = "<strong>Некорректное значение Телефона:</strong><br>формат +7(903)888-88-88";
        break
      case "email":
        errorText = "<strong>Некорректное значение Email</strong>";
        break
      default:
        errorText = `<strong>Некорректное значение ${inputN}</strong>`;
    }

    return errorText
  }

  createBtnComponentsTmpl(stateComponents, createComponentTmpl): string {
    return Object.entries(stateComponents).reduce(function (tmpl, compState) {
      return tmpl + createComponentTmpl(compState[1], compState[0], true);
    }, '');
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
      input.classList.add('error');
      this.addErrorMessage(this.getErrorText(input.getAttribute('type'), input.getAttribute('name')), input)
    } else {
      input.classList.remove('error')
      this.removeErrorMessage(input.getAttribute('name'))
    }
  }

  onInput(event: Event){
    event.preventDefault();
    const input = event.currentTarget
    const value = input.value
    if(value.length > 2 && this.isValidateInput(input) && input.classList.contains('error')){
      input.classList.remove('error')
      this.removeErrorMessage(input.getAttribute('name'))
    }
  }

  isValidateInput(input: HTMLElement):boolean{
    return new RegExp(this.returnRegExp(input.getAttribute('type') || 'text')).test(input.value || '')
  }

  addErrorMessage(message:string, input: HTMLElement):void{
    const errorMessage = document.querySelector(`.error-message[data-input="${input.getAttribute('name')}"]`)
    if(!errorMessage){
      let error = document.createElement('div')
      error.className = 'error-message'
      error.style.color = 'red'
      error.innerHTML = message
      error.dataset.input = input.getAttribute('name')
      input.before(error)
    }
  }
  removeErrorMessage(inputName:string):void {
    const errorMessage = document.querySelector(`.error-message[data-input="${inputName}"]`)
    if(errorMessage){
      errorMessage.remove()
    }
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
