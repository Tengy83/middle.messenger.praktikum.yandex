import { BaseAPI } from "./BaseAPI";
import { HTTPTransport as HTTP } from "../HTTPTransport";

const userAPIInstance = new HTTP();
export class UserAPI extends BaseAPI {
  request() {
    return userAPIInstance.get("/auth/user", { credentials: true });
  }
  update(json) {
    return userAPIInstance.put("/user/profile", {
      headers: { "content-type": "application/json; charset=utf-8" },
      data: json,
      credentials: true,
    });
  }
}
