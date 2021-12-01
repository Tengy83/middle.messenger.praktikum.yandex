import { MessengerModule } from '@modules/MessengerModule';
import { Form } from '@modules/form/Form';
import { createChangePassword } from './changePassword.tmpl';
import { Options } from '@utils/interfaces';
import { ChangePasswordAPI } from '@utils/api/ChangePasswordAPI';
import { addError } from '@utils/utils';
import { URL_LINKS } from '@/constants';

export class ChangePassword extends MessengerModule {
  changePasswordAPI: ChangePasswordAPI;

  constructor(options: Options) {
    super({
      name: 'ChangePassword',
      state: options.state,
    });

    this.changePasswordAPI = new ChangePasswordAPI();
  }

  prepare(): void {
    this.createTemplate();
  }

  createTemplate(): void {
    const form = new Form({ state: this.state.form, api: this.api.bind(this) });
    this.addToInternalComponentsList(form);

    const formTmpl = form.getTemplate();
    const changePasswordTmpl = createChangePassword(formTmpl);

    this.setTemplate(changePasswordTmpl);
  }

  api(data: any): void {
    const json = JSON.stringify(data);

    this.changePasswordAPI.update(json).then((result) => {
      if (result.status !== 200) {
        addError('.change-password__form', 'Ошибка');
      } else {
        window.location.href = URL_LINKS.user;
      }
    });
  }
}
