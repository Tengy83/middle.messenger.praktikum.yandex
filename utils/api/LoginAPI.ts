import { BaseAPI } from './BaseAPI';
import { HTTPTransport as HTTP } from '../HTTPTransport';

const authAPIInstance = new HTTP();
export class LoginAPI extends BaseAPI {
  create(json: string): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/auth/signup', {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: json,
      credentials: true,
    });
  }
  request(json: string): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/auth/signin', {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: json,
      credentials: true,
    });
  }
  delete(): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/auth/logout', {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: '',
      credentials: true,
    });
  }
}
