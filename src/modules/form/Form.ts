import { Options } from '@utils/interfaces';
import { v4 as makeUUID } from 'uuid';

import { MessengerModule } from '@modules/MessengerModule';

import { createForm } from './form.tmpl';
import { createInput } from './components/input/input.tmpl';
import { createButton } from '@modules/button/button.tmpl';

export class Form extends MessengerModule {
  _id: string;
  _api: any;

  constructor(options: Options) {
    super({
      name: 'Form',
      state: options.state,
      listeners: ['submit', 'blur', 'input'],
    });

    this._id = makeUUID();
    this._api = options.api;
  }

  prepare(): void {
    this.createTemplate();
  }

  _createResources() {
    const { className, action, method, enctype } = this.state;
    const newElement = this._createDocumentElement('FORM');
    newElement.className = className || 'form';
    newElement.setAttribute('data-id', this._id);
    newElement.setAttribute('action', action);
    newElement.setAttribute('method', method);
    if (enctype) {
      newElement.setAttribute('enctype', enctype);
    }
    this.element = newElement;
  }

  createTemplate(): void {
    const inputs = this.createComponentsTmpl(this.state.inputs, createInput) || '';
    const buttons = this.createBtnComponentsTmpl(this.state.buttons, createButton) || '';

    this.setTemplate(createForm(inputs, buttons, this._id));
  }

  createComponentsTmpl(stateComponents: any, createComponentTmpl: any): string {
    return Object.entries(stateComponents).reduce(function (tmpl, compState) {
      const cState: any = compState[1];
      return tmpl + createComponentTmpl(compState[0], 'label' in cState, 'placeholder' in cState, 'value' in cState);
    }, '');
  }

  returnRegExp(inputType: string): string {
    let regExp = '';
    switch (inputType) {
      case 'password':
        regExp = '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}$';
        break;
      case 'tel':
        regExp = '^[+]?[0-9]{0,2}[-s. ]?[(]?[0-9]{3}[)]?[-s. ]?[0-9]{3}[-s. ]?[0-9]{2}[-s. ]?[0-9]{2}$';
        break;
      case 'email':
        regExp = '^[a-zA-Z][a-zA-Z0-9]+@{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4}$';
        break;
      default:
        regExp = '^[а-яА-ЯёЁa-zA-Z0-9-_.;,"\']{1,20}$';
    }
    return regExp;
  }

  getErrorText(inputType = '', inputName = ''): string {
    let errorText = '';
    let inputN = '';
    switch (inputName) {
      case 'login':
        inputN = 'Логина, min. 3 символа';
        break;
      case 'first_name':
        inputN = 'Имени, min. 3 символа';
        break;
      case 'second_name':
        inputN = 'Фамилии, min. 3 символа';
        break;
      default:
        inputN = 'поля';
    }
    switch (inputType) {
      case 'password':
        errorText =
          '<strong>Некорректное значение Пароля:</strong><br><ul><li>Поле содержит хотя бы одно число</li><li>Поле содержит хотя бы один спецсимвол</li><li>Поле содержит хотя бы одну латинскую букву в нижнем регистре</li><li>Поле содержит хотя бы одну латинскую букву в верхнем регистре</li><li>Поле состоит не менее, чем из 6 вышеупомянутых символов</li></ul>';
        break;
      case 'tel':
        errorText = '<strong>Некорректное значение Телефона:</strong><br>формат +7(903)888-88-88';
        break;
      case 'email':
        errorText = '<strong>Некорректное значение Email</strong>';
        break;
      default:
        errorText = `<strong>Некорректное значение ${inputN}</strong>`;
    }

    return errorText;
  }

  createBtnComponentsTmpl(stateComponents: any, createComponentTmpl: any): string {
    return Object.entries(stateComponents).reduce(function (tmpl, compState) {
      return tmpl + createComponentTmpl(compState[1], compState[0], true);
    }, '');
  }

  getTemplate(): string {
    return this.template;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const data: any = {};
    let isValidateForm = true;
    const target: any = <HTMLInputElement>event.target;

    Array.from(target.elements)
      .filter((element: any) => element.tagName === 'INPUT')
      .forEach((input: any) => {
        if (!this.isValidateInput(input)) {
          input.classList.add('error');
          data[input.getAttribute('name')] = 'Not validated';
          isValidateForm = false;
        } else if (input.getAttribute('name') !== 'passwordRepeat') {
          data[input.getAttribute('name')] = input.value;
        }
      });

    if (!isValidateForm) {
      console.error(`The form ${this._id} did not pass validation`);
    } else if (this._api) {
      this._api(data);
    }
  }
  onBlur(event: Event) {
    event.preventDefault();
    const input = <HTMLInputElement>event.currentTarget;
    if (!this.isValidateInput(input)) {
      input.classList.add('error');
      this.addErrorMessage(this.getErrorText(input.getAttribute('type') || '', input.getAttribute('name') || ''), input);
    } else {
      input.classList.remove('error');
      this.removeErrorMessage(input.getAttribute('name') || '');
    }
  }

  onInput(event: Event) {
    event.preventDefault();
    const input: any = event.currentTarget;
    const value = input.value;
    if (value.length > 0 && this.isValidateInput(input) && input.classList.contains('error')) {
      input.classList.remove('error');
      this.removeErrorMessage(input.getAttribute('name'));
    }
  }

  isValidateInput(input: any): boolean {
    const path = document.location.pathname;
    return path === '/'
      ? true
      : input.getAttribute('type') !== 'file'
      ? new RegExp(this.returnRegExp(input.getAttribute('type') || 'text')).test(input.value || '')
      : this.isValidateFile(input);
  }

  isValidateFile(input: any): boolean {
    let isValidateFile = true;
    const files = input.files;
    if (files.length !== 0) {
      const format = files[0].name.split('.').splice(-1, 1)[0];

      switch (format) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'png':
        case 'webp':
          break;
        default:
          isValidateFile = false;
      }
    }
    return isValidateFile;
  }

  addErrorMessage(message: string, input: HTMLElement): void {
    const errorMessage = document.querySelector(`.error-message[data-input="${input.getAttribute('name')}"]`);
    if (!errorMessage) {
      const error = document.createElement('div');
      error.className = 'error-message';
      error.style.color = 'red';
      error.innerHTML = message;
      error.dataset.input = input.getAttribute('name') || '';
      input.before(error);
    }
  }
  removeErrorMessage(inputName: string): void {
    const classError = inputName ? `.error-message[data-input="${inputName}"]` : `.error-message`;
    const errorMessage = document.querySelector(classError);
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  initDOMListeners(componentDOM: any) {
    const comp: any = this;
    const id = componentDOM.dataset.id;
    this.id = document.querySelector(`[data-id="${id}"]`);
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
        if (method !== 'onBlur' && method !== 'onInput' && this.id) {
          this.id.addEventListener(listener, comp[method]);
        } else if (this.id) {
          this.id.querySelectorAll('input').forEach((input) => {
            input.addEventListener(listener, comp[method]);
          });
        }
      });
    }
  }
  removeDOMListeners() {
    const comp: any = this;
    if (this.listeners) {
      this.listeners.forEach((listener) => {
        const method = this.getMethodName(listener);

        if (method !== 'onBlur' && method !== 'onInput' && this.id) {
          this.id.removeEventListener(listener, comp[method]);
        } else if (this.id) {
          this.id.querySelectorAll('input').forEach((input) => {
            input.removeEventListener(listener, comp[method]);
          });
        }
      });
    }
  }
}
