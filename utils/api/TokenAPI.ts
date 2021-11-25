import { BaseAPI } from "./BaseAPI";
import { HTTPTransport as HTTP } from "../HTTPTransport";

const tokenAPIInstance = new HTTP();
export class TokenAPI extends BaseAPI {
  request(id) {
    return tokenAPIInstance.post(`/chats/token/${id}`, {
      headers: { "content-type": "application/json; charset=utf-8" },
      data: "",
      credentials: true,
    });
  }
}
