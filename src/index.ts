import "./scss/index.scss";

import { Error404Page } from "./pages/Error404";
import { Router } from "../utils/Router";

import { HomePage } from "./pages/Home";
import { RegistrationPage } from "./pages/Registration";
import { ChatsPage } from "./pages/Chats";
import { UserPage } from "./pages/User";
import { EditUserPage } from "./pages/EditUser";
import { ChangePasswordPage } from "./pages/ChangePassword";

const router = new Router("#root");

router
  .use("/", HomePage)
  .use("/error404", Error404Page)
  .use("/registration", RegistrationPage)
  .use("/chats", ChatsPage)
  .use("/user", UserPage)
  .use("/edit_user", EditUserPage)
  .use("/change_password", ChangePasswordPage)
  .start();
