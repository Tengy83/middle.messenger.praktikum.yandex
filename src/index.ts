import "./scss/index.scss";

import { URL_LINKS } from "../constants";

import { Error404Page } from "./pages/Error404";
import { Router } from "../utils/Router";

import { HomePage } from "./pages/Home";
import { RegistrationPage } from "./pages/Registration";
import { ChatsPage } from "./pages/Chats";
import { UserPage } from "./pages/User";
import { EditUserPage } from "./pages/EditUser";
import { ChangePasswordPage } from "./pages/ChangePassword";
import { MessagePage } from "./pages/Message";

const router = new Router("#root");

router
  .use(URL_LINKS["home"], HomePage)
  .use(URL_LINKS["error404"], Error404Page)
  .use(URL_LINKS["signUp"], RegistrationPage)
  .use(URL_LINKS["chats"], ChatsPage)
  .use(URL_LINKS["messenger"], MessagePage)
  .use(URL_LINKS["user"], UserPage)
  .use(URL_LINKS["editUser"], EditUserPage)
  .use(URL_LINKS["changePassword"], ChangePasswordPage)
  .start();
