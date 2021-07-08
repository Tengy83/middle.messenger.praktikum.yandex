import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './src/scss/index.scss';

const pages = {
  error404: import('./src/pages/error404'),
  home: import('./src/pages/home'),
  registration: import('./src/pages/registration'),
  chats: import('./src/pages/chats'),
  user: import('./src/pages/user'),
};

const root = document.querySelector('#root');

const renderPage = async (name) => {
  let template = '';
  if (pages.hasOwnProperty(name)) {
    template = await pages[name];
  } else {
    template = await pages['error404'];
  }

  removeClickHandlers();

  root.innerHTML = template.createPage();

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
