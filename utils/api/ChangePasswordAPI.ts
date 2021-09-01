import { BaseAPI } from "./BaseAPI";
import { HTTPTransport as HTTP } from "../HTTPTransport";

const сhangePasswordAPIInstance = new HTTP();
export class ChangePasswordAPI extends BaseAPI {
  update(json) {
    return сhangePasswordAPIInstance.put("/user/password", {
      headers: { "content-type": "application/json; charset=utf-8" },
      data: json,
      credentials: true,
    });
  }
}
