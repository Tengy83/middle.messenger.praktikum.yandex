import { Options } from '@utils/interfaces';

import { MessengerModule } from '@modules/MessengerModule';
import { createChatStub } from './chatStub.tmpl';

export class ChatStub extends MessengerModule {
  constructor(options: Options) {
    super({
      name: 'ChatStub',
      state: options.state,
      template: createChatStub(),
    });
  }
}
