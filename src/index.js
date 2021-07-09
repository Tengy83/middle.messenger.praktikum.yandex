import 'regenerator-runtime/runtime';

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

const renderPage = async (name) => {
  let template = '';
  if (pages.hasOwnProperty(name)) {
    try {
      template = await pages[name];
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      template = await pages['error404'];
    } catch (err) {
      console.error(err);
    }
  }

  removeClickHandlers();

  root.innerHTML = template();

  initClickHandlers();
};

const errorUrl = window.location.pathname.length;

if (
  window.location.search.toLowerCase().indexOf('error=404') >= 0 ||
  errorUrl > 1
) {
  renderPage('error404');
} else {
  renderPage('home');
}

const initClickHandlers = () => {
  const links = document.querySelectorAll('[data-page]');

  for (const link of links) {
    link.addEventListener('click', pageRenderListaner);
  }
};

const removeClickHandlers = () => {
  const links = document.querySelectorAll('[data-page]');

  for (const link of links) {
    link.removeEventListener('click', pageRenderListaner);
  }
};
const pageRenderListaner = (ev) => {
  ev.preventDefault();
  if (ev.target.tagName === 'A') {
    renderPage(ev.target.dataset.page);
  } else {
    let prevDom = ev.target;
    let nextDom = prevDom.parentNode;
    while (nextDom.tagName !== 'A' || nextDom.tagName == 'BODY') {
      prevDom = nextDom;
      nextDom = prevDom.parentNode;
    }
    if (nextDom.dataset.page) {
      renderPage(nextDom.dataset.page);
    }
  }
};
