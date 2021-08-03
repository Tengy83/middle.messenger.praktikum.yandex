import "./scss/index.scss";

import { MessengerPage } from "./pages/MessengerPage";
import { Error404Page } from "./pages/Error404";
import { HomePage } from "./pages/Home";
import { RegistrationPage } from "./pages/Registration";
import { ChatsPage } from "./pages/Chats";
import { UserPage } from "./pages/User";
import { EditUserPage } from "./pages/EditUser";
import { ChangePasswordPage } from "./pages/ChangePassword";

const root = "#root";
let currentPage: MessengerPage;

const pages: Record<string, MessengerPage> = {
  error404: new Error404Page(root),
  home: new HomePage(root),
  registration: new RegistrationPage(root),
  chats: new ChatsPage(root),
  user: new UserPage(root),
  edit_user: new EditUserPage(root),
  change_password: new ChangePasswordPage(root),
};

function renderPage(name: string): void {
  const createCurrentPage = pages[name] || pages.error404;

  if (currentPage) {
    currentPage.destroy();
  }

  removeClickHandlers();

  createCurrentPage.render();

  currentPage = createCurrentPage;

  initClickHandlers();
}

const pathname = window.location.pathname.replace("/", "");
renderPage(pathname || "home");

function initClickHandlers() {
  const links = document.querySelectorAll("[data-page]");

  for (const link of links) {
    link.addEventListener("click", pageRenderListener);
  }
}

function removeClickHandlers(): void {
  const links = document.querySelectorAll("[data-page]");

  for (const link of links) {
    link.removeEventListener("click", pageRenderListener);
  }
}
function pageRenderListener(ev: Event): void {
  ev.preventDefault();
  const pageName = ev.currentTarget.dataset.page;
  renderPage(pageName);
}
