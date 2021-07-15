import { MessengerModule } from '../MessengerModule';
import { createHeader } from './header.tmpl';
import { createUserLink } from './components/userLink.tmpl';

export class Header extends MessengerModule {
  constructor(options) {
    super({
      name: 'Header',
      state: options.state,
      ...options,
    });
  }
  prepare() {
    this.createTemplate();
  }

  createTemplate() {
    let userLinktmpl = '';
    if ('userLink' in this.state) {
      userLinktmpl = createUserLink();
    }
    const headerTmpl = createHeader(userLinktmpl);

    this.setTemplate(headerTmpl);
  }
}
