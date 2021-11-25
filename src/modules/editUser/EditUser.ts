import { Options } from '../../../utils/interfaces';
import { FILES_URL, URL_LINKS } from '../../../constants';

import { MessengerModule } from '../MessengerModule';
import { Form } from '../form/Form';
import { createEditUser } from './editUser.tmpl';
import { UserAPI } from '../../../utils/api/UserAPI';
import { AvatarAPI } from '../../../utils/api/AvatarAPI';
import { addError } from '../../../utils/utils';

export class EditUser extends MessengerModule {
  userAPI: UserAPI;
  avatarAPI: AvatarAPI;

  constructor(options: Options) {
    super({
      name: 'EditUser',
      state: options.state,
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
        addError('.edit-user__form', 'Ошибка');
      } else {
        let res = JSON.parse(result.response);
        const form = document.querySelector('.edit-user__form');
        if (res.avatar) {
          let img = document.querySelector(`.edit-user > img`);

          if (img) img.setAttribute('src', `${FILES_URL}${res.avatar}`);
        }

        let titleDOM = document.querySelector(`.edit-user__title`);
        if (titleDOM) titleDOM.textContent = res.first_name;

        this.state.form.inputs.firstName.value = res.first_name;
        this.state.form.inputs.secondName.value = res.second_name;
        this.state.form.inputs.chatsName.value = res.display_name;
        this.state.form.inputs.login.value = res.login;
        this.state.form.inputs.email.value = res.email;
        this.state.form.inputs.phone.value = res.phone;

        let inpFN: any = document.querySelector(`.edit-user__form input[name="first_name"]`);
        let inpSN: any = document.querySelector(`.edit-user__form input[name="second_name"]`);
        let inpDN: any = document.querySelector(`.edit-user__form input[name="display_name"]`);
        let inpL: any = document.querySelector(`.edit-user__form input[name="login"]`);
        let inpE: any = document.querySelector(`.edit-user__form input[name="email"]`);
        let inpP: any = document.querySelector(`.edit-user__form input[name="phone"]`);

        if (inpFN) inpFN.value = res.first_name;
        if (inpSN) inpSN.value = res.second_name;
        if (inpDN) inpDN.value = res.display_name;
        if (inpL) inpL.value = res.login;
        if (inpE) inpE.value = res.email;
        if (inpP) inpP.value = res.phone;
      }
    });
  }

  api(data: any): void {
    let json = JSON.stringify(data);

    this.userAPI.update(json).then((result) => {
      if (result.status !== 200) {
        addError('.edit-user__form', 'Ошибка');
      } else {
        let inputFile: any = document.querySelector(`.edit-user__form input[type="file"]`);
        if (inputFile.files.length) {
          const form: any = document.querySelector(`.edit-user__form`);
          if (form) {
            const formData = new FormData(form);
            this.avatarAPI.update(formData).then((result) => {
              if (result.status !== 200) {
                addError('.edit-user__form', 'Ошибка загрузки файла');
              } else {
                alert('Изменения внесены');
                window.location.href = URL_LINKS.user;
              }
            });
          }
        } else {
          alert('Изменения внесены');
          window.location.href = URL_LINKS.user;
        }
      }
    });
  }
}
