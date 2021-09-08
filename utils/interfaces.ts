import { MessengerModule } from "../src/modules/MessengerModule";

export interface Options {
  name: string;
  state: object;
  template?: string;
  listeners?: string[];
  internalComponentsList?: MessengerModule[];
  userlink?: boolean;
}
export interface PageOptions {
  name: string;
  componentsList: MessengerModule[];
}

export interface LoginRequest {
  login: "string";
  password: "string";
}
