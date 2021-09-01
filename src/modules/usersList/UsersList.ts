import { Options } from "../../../utils/interfaces";
import { v4 as makeUUID } from "uuid";

import { MessengerModule } from "../MessengerModule";
import { createUsersList } from "./usersList.tmpl";
import { createUsersListItem } from "./components/usersListItem.tmpl";

export class UsersList extends MessengerModule {
  _id: string;

  constructor(options: Options) {
    super({
      name: "UsersList",
      state: options.state,
      ...options,
    });

    this._id = makeUUID();
  }

  prepare(): void {
    this.createTemplate();
  }

  _createResources() {
    const tagName = "ul";
    const className = "user-list";
    const newElement = this._createDocumentElement(tagName);
    newElement.className = className;
    if (this._id) {
      newElement.setAttribute("data-id", this._id);
    }
    this.element = newElement;
  }

  createTemplate(): void {
    const items =
      this.createComponentsTmpl(this.state, createUsersListItem) || "";

    this.setTemplate(createUsersList(items, this._id));
  }

  createComponentsTmpl(stateComponents, createComponentTmpl): string {
    return Object.entries(stateComponents).reduce(function (tmpl, compState) {
      return (
        tmpl +
        createComponentTmpl(
          compState[1].chatId,
          compState[1].id,
          compState[1].imgUrl,
          compState[1].name,
          compState[1].text
        )
      );
    }, "");
  }
}
