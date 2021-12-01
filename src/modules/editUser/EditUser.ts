import { Options } from '@utils/interfaces';
import { FILES_URL, URL_LINKS } from '@/constants';

import { MessengerModule } from '@modules/MessengerModule';
import { Form } from '@modules/form/Form';
import { createEditUser } from './editUser.tmpl';
import { UserAPI } from '@utils/api/UserAPI';
import { AvatarAPI } from '@utils/api/AvatarAPI';
import { addError } from '@utils/utils';

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
        const res = JSON.parse(result.response);
        const form = document.querySelector('.edit-user__form');
        if (res.avatar) {
          const img = document.querySelector(`.edit-user > img`);

          if (img) img.setAttribute('src', `${FILES_URL}${res.avatar}`);
        }

        const titleDOM = document.querySelector(`.edit-user__title`);
        if (titleDOM) titleDOM.textContent = res.first_name;

        this.state.form.inputs.firstName.value = res.first_name;
        this.state.form.inputs.secondName.value = res.second_name;
        this.state.form.inputs.chatsName.value = res.display_name;
        this.state.form.inputs.login.value = res.login;
        this.state.form.inputs.email.value = res.email;
        this.state.form.inputs.phone.value = res.phone;

        const edit_form: any = document.querySelector(`.edit-user__form`);

        const inputFirstName: any = edit_form.querySelector(`input[name="first_name"]`);
        const inputSecondName: any = edit_form.querySelector(`input[name="second_name"]`);
        const inputDisplayName: any = edit_form.querySelector(`input[name="display_name"]`);
        const inputLogin: any = edit_form.querySelector(`input[name="login"]`);
        const inputEmail: any = edit_form.querySelector(`input[name="email"]`);
        const inputPhone: any = edit_form.querySelector(`input[name="phone"]`);

        if (inputFirstName) inputFirstName.value = res.first_name;
        if (inputSecondName) inputSecondName.value = res.second_name;
        if (inputDisplayName) inputDisplayName.value = res.display_name;
        if (inputLogin) inputLogin.value = res.login;
        if (inputEmail) inputEmail.value = res.email;
        if (inputPhone) inputPhone.value = res.phone;
      }
    });
  }

  api(data: any): void {
    const json = JSON.stringify(data);

    this.userAPI.update(json).then((result) => {
      if (result.status !== 200) {
        addError('.edit-user__form', 'Ошибка');
      } else {
        const inputFile: any = document.querySelector(`.edit-user__form input[type="file"]`);
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
