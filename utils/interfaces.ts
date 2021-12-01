import { Form } from '@modules/form/Form';
import { MessengerModule } from '@modules/MessengerModule';

export interface Options {
  name?: string;
  state: IState;
  template?: string;
  listeners?: string[];
  internalComponentsList?: object[];
  userlink?: boolean;
  api?: any;
}

export interface IState {
  tagName?: string;
  className: string;
  titleClass?: string;
  title?: string;
  form?: IForm;
  img?: string;
  avatar?: string;
  text?: string;
  link?: string;
  linkTitle?: string;
  dataPage?: string;
  classLogoLinkName?: string;
  logoLink?: string;
  logoImgUrl?: string;
  logoTxt?: string;
  logoLinkDataPage?: string;
  userLink?: string;
  classUserLink?: string;
  userLinkDataPage?: string;
  userImgUrl?: string;
  classUserImg?: string;
  login?: string;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  email?: string;
  phone?: string;
  buttons?: IButtons;
  newChatLink?: INewChatLink;
}

export interface INewChatLink {
  link?: string;
  className?: string;
  title?: string;
}

export interface IForm {
  action: string;
  method: string;
  enctype?: string;
  className: string;

  inputs: IInputs;
  buttons: IButtons;
}
export interface IInputs {
  [key: string]: IInput;
}
export interface IInput {
  type: string;
  name: string;
  className: string;
  placeholder?: string;
  value?: string;
  label?: string;
}
export interface IButtons {
  [key: string]: IButton;
}
export interface IButton {
  tag: string;
  type?: string;
  link?: string;
  className: string;
  title?: string;
  dataPage?: string;
  hr?: boolean;
}
export interface PageOptions {
  name: string;
  componentsList: object[];
  root: string;
}

export interface LoginRequest {
  login: 'string';
  password: 'string';
}
