import { BaseAPI } from './BaseAPI';
import { HTTPTransport as HTTP } from '../HTTPTransport';

const chatUsersAPIInstance = new HTTP();

export class ChatUsersAPI extends BaseAPI {
  create(json: string): Promise<XMLHttpRequest> {
    return chatUsersAPIInstance.put('/chats/users', {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: json,
      credentials: true,
    });
  }
  request(id: string): Promise<XMLHttpRequest> {
    return chatUsersAPIInstance.get(`/chats/${id}/users`, {
      credentials: true,
    });
  }
  delete(json: string): Promise<XMLHttpRequest> {
    return chatUsersAPIInstance.delete('/chats/users', {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: json,
      credentials: true,
    });
  }
}
