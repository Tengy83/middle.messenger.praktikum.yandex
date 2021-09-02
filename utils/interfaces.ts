import { MessengerModule } from "../src/modules/MessengerModule";

export interface Options {
  name: string;
  state: object;
  template?: string;
  listeners?: string[];
  internalComponentsList?: MessengerModule[];
}
export interface PageOptions {
  name: string;
  componentsList: MessengerModule[];
  root: string;
}
