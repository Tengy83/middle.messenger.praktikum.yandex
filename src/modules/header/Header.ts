import { Options } from '@utils/interfaces';

import { MessengerModule } from '@modules/MessengerModule';
import { createHeader } from './header.tmpl';
import { createUserLink } from './components/userLink.tmpl';
import { UserAPI } from '@utils/api/UserAPI';

export class Header extends MessengerModule {
  userAPI?: UserAPI;

  constructor(options: Options) {
    super({
      name: 'Header',
      state: options.state,
    });

    if ('userLink' in this.state) {
      this.userAPI = new UserAPI();
    }
  }
  prepare(): void {
    this.createTemplate();

    if ('userLink' in this.state) {
      this.api();
    }
  }

  createTemplate(): void {
    let userLinktmpl = '';
    if ('userLink' in this.state) {
      userLinktmpl = createUserLink();
    }

    const headerTmpl = createHeader(userLinktmpl);

    this.setTemplate(headerTmpl);
  }

  api(): void {
    new UserAPI()
      .request()
      .then((r) => JSON.parse(r.response))
      .then((data) => {
        if (data.first_name) {
          this.state.first_name = data.first_name;
        }

        const span = document.querySelector('.header__user-link span');
        if (span) {
          span.textContent = this.state.first_name;
        }
      });
  }
}
