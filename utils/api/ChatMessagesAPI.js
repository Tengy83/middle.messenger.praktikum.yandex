import { BaseAPI } from "./BaseAPI";
import HTTP from "modules/http";

const chatMessagesAPIInstance = new HTTP("api/v1/messages");

export class ChatMessagesAPI extends BaseAPI {
  request({ id }) {
    return chatMessagesAPIInstance.get(`/${id}`);
  }
}
