import { BaseAPI } from './BaseAPI';
import { HTTPTransport as HTTP } from '../HTTPTransport';

const avatarAPIInstance = new HTTP();
export class AvatarAPI extends BaseAPI {
  update(data: FormData): Promise<XMLHttpRequest> {
    return avatarAPIInstance.put('/user/profile/avatar', {
      data: data,
      credentials: true,
    });
  }
}
