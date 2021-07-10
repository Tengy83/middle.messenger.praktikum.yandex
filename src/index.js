import './scss/index.scss';

import { createChatStub } from '../src/modules/chatStub/chatStub.tmpl';

const root = document.querySelector('#root');

root.innerHTML = createChatStub();
