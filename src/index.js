import './scss/index.scss';

import { createPage as error404 } from './pages/error404';
import { createPage as home } from './pages/home';
import { createPage as registration } from './pages/registration';
import { createPage as chats } from './pages/chats';
import { createPage as user } from './pages/user';
import { createPage as edit_user } from './pages/editUser';
import { createPage as change_password } from './pages/changePassword';

const pages = {
  error404,
  home,
  registration,
  chats,
  user,
  edit_user,
  change_password,
};

const root = document.querySelector('#root');

function renderPage(name) {
  const createCurrentPage = pages[name] || error404;

  removeClickHandlers();

  root.innerHTML = createCurrentPage();

  initClickHandlers();
}

const pathname = window.location.pathname.replace('/', '');
renderPage(pathname || 'home');

function initClickHandlers() {
  const links = document.querySelectorAll('[data-page]');

  for (const link of links) {
    link.addEventListener('click', pageRenderListener);
  }
}

function removeClickHandlers() {
  const links = document.querySelectorAll('[data-page]');

  for (const link of links) {
    link.removeEventListener('click', pageRenderListener);
  }
}
function pageRenderListener(ev) {
  ev.preventDefault();
  const pageName = ev.currentTarget.dataset.page;
  renderPage(pageName);
}
