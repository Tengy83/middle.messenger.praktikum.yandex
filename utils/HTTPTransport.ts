enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options = {
  headers?: object;
  data?: any;
  method: METHODS;
  timeout?: number;
  retries?: number;
};

type OptionsWithoutMethod = Omit<Options, "method">;

export class HTTPTransport {
  get(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }
  put(url: string, options: OptionsWithoutMethod): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHOD.PUT },
      options.timeout
    );
  }
  post(url: string, options: OptionsWithoutMethod): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }
  delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  }

  request(
    url: string,
    options: Options = { method: METHODS.GET },
    timeout = 5000
  ): Promise<XMLHttpRequest> {
    const { headers = {}, data, method } = options;

    return new Promise((resolve, reject) => {
      if (!url) {
        reject("No URL");
        return;
      }
      if (!method) {
        reject("No method");
        return;
      }
      const isGet = method === METHODS.GET;

      if (isGet && data) {
        url += this._queryStringify(data);
      }

      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        if (xhr.readyState == 4) {
          resolve(xhr);
        } else {
          reject;
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }

  private _queryStringify(data: object): string {
    if (data === null || typeof data !== "object") {
      throw new Error("Data must be object");
    }
    const queryArr = Object.entries(data);
    let query = "?";
    queryArr.forEach((entrie, ind) => {
      query += `${entrie[0]}=${entrie[1]}${
        ind < queryArr.length - 1 ? "&" : ""
      }`;
    });
    return query;
  }
}

export function fetchWithRetry(
  url: string,
  options: Options
): Promise<XMLHttpRequest> {
  const { retries = 1 } = options;

  function onError(err) {
    const usedRetries = retries - 1;
    if (!usedRetries) {
      throw err;
    }

    return fetchWithRetry(url, { ...options, retries: usedRetries });
  }

  return fetch(url, options).catch(onError);
}
export function fetch(url: string, options: Options): Promise<XMLHttpRequest> {
  return new HTTPTransport().request(url, options, options.timeout);
}
