import './scss/index.scss';

import { createPage as error404 } from './pages/error404';
import { createPage as home } from './pages/home';
import { createPage as registration } from './pages/registration';
import { createPage as chats } from './pages/chats';
import { createPage as user } from './pages/user';

const pages = {
  error404,
  home,
  registration,
  chats,
  user,
};

const root = document.querySelector('#root');

function renderPage(name) {
  let template = '';
  if (pages.hasOwnProperty(name)) {
    template = pages[name];
  } else {
    template = pages['error404'];
  }

  // removeClickHandlers();

  root.innerHTML = template();

  // initClickHandlers();
}

const errorUrl = window.location.pathname.length;

if (
  window.location.search.toLowerCase().indexOf('error=404') >= 0 ||
  errorUrl > 1
) {
  renderPage('error404');
} else {
  renderPage('home');
}

function initClickHandlers() {
  const links = document.querySelectorAll('[data-page]');

  for (const link of links) {
    link.addEventListener('click', pageRenderListaner);
  }
}

function removeClickHandlers() {
  const links = document.querySelectorAll('[data-page]');

  for (const link of links) {
    link.removeEventListener('click', pageRenderListaner);
  }
}
window.pageRenderListaner = function (ev) {
  if (ev.hasAttribute('data-page')) {
    renderPage(ev.getAttribute('data-page'));
  }
  return false;
};
