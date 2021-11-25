import { Options } from "../../../utils/interfaces";
import { FILES_URL, URL_LINKS } from "../../../constants";

import { MessengerModule } from "../MessengerModule";
import { Form } from "../form/Form";
import { createEditUser } from "./editUser.tmpl";
import { UserAPI } from "../../../utils/api/UserAPI";
import { AvatarAPI } from "../../../utils/api/AvatarAPI";
import { addError } from "../../../utils/utils";

export class EditUser extends MessengerModule {
  userAPI: UserAPI;
  avatarAPI: AvatarAPI;

  constructor(options: Options) {
    super({
      name: "EditUser",
      state: options.state,
      ...options,
    });

    this.userAPI = new UserAPI();
    this.avatarAPI = new AvatarAPI();
  }

  prepare(): void {
    this.createTemplate();
    this.apiUser();
  }

  createTemplate(): void {
    const form = new Form({ state: this.state.form, api: this.api.bind(this) });
    this.addToInternalComponentsList(form);

    const formTmpl = form.getTemplate();
    const editUserTmpl = createEditUser(formTmpl);

    this.setTemplate(editUserTmpl);
  }

  apiUser() {
    new UserAPI().request().then((result) => {
      if (result.status !== 200) {
        addError(".edit-user__form", "Ошибка");
      } else {
        let res = JSON.parse(result.response);
        const form = document.querySelector(".edit-user__form");
        if (res.avatar) {
          document
            .querySelector(`.edit-user > img`)
            .setAttribute("src", `${FILES_URL}${res.avatar}`);
        }
        document.querySelector(`.edit-user__title`).textContent =
          res.first_name;

        this.state.form.inputs.firstName.value = res.first_name;
        this.state.form.inputs.secondName.value = res.second_name;
        this.state.form.inputs.chatsName.value = res.display_name;
        this.state.form.inputs.login.value = res.login;
        this.state.form.inputs.email.value = res.email;
        this.state.form.inputs.phone.value = res.phone;

        document.querySelector(
          `.edit-user__form input[name="first_name"]`
        ).value = res.first_name;
        document.querySelector(
          `.edit-user__form input[name="second_name"]`
        ).value = res.second_name;
        document.querySelector(
          `.edit-user__form input[name="display_name"]`
        ).value = res.display_name;
        document.querySelector(`.edit-user__form input[name="login"]`).value =
          res.login;
        document.querySelector(`.edit-user__form input[name="email"]`).value =
          res.email;
        document.querySelector(`.edit-user__form input[name="phone"]`).value =
          res.phone;
      }
    });
  }

  api(data): void {
    let json = JSON.stringify(data);

    this.userAPI.update(json).then((result) => {
      if (result.status !== 200) {
        addError(".edit-user__form", "Ошибка");
      } else {
        if (
          document.querySelector(`.edit-user__form input[type="file"]`).files
            .length
        ) {
          const form = document.querySelector(`.edit-user__form`);
          const formData = new FormData(form);
          this.avatarAPI.update(formData).then((result) => {
            if (result.status !== 200) {
              addError(".edit-user__form", "Ошибка загрузки файла");
            } else {
              alert("Изменения внесены");
              window.location.href = URL_LINKS.user;
            }
          });
        } else {
          alert("Изменения внесены");
          window.location.href = URL_LINKS.user;
        }
      }
    });
  }
}
