import { BaseAPI } from "./BaseAPI";
import { HTTPTransport as HTTP } from "../HTTPTransport";

const chatAPIInstance = new HTTP();

export class ChatsAPI extends BaseAPI {
  create(json: string) {
    return chatAPIInstance.post("/chats", {
      headers: { "content-type": "application/json; charset=utf-8" },
      data: json,
      credentials: true,
    });
  }
  request() {
    return chatAPIInstance.get("/chats", { credentials: true });
  }
  delete(json: string) {
    return chatAPIInstance.delete("/chats", {
      headers: { "content-type": "application/json; charset=utf-8" },
      data: json,
      credentials: true,
    });
  }
}
