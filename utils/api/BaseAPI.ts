export class BaseAPI {
  create(json?: string): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }

  request(json?: string): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }

  update(json?: string | FormData): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }

  delete(json?: string): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }
}
