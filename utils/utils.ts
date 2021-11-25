import { MessengerPage } from "../src/pages/MessengerPage";

export function getObjValue(
  obj: object,
  path: string,
  defaultValue?: object
): object {
  const keys = path.split(".");
  let result = obj;
  for (let key of keys) {
    result = result[key];
    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export function identity<T>(val: T): T {
  return val;
}

export function last<T>(arr: T[]): T {
  const length = arr.length;
  return length ? arr[length - 1] : undefined;
}

export function first<T>(arr: T[]): T {
  return arr.length ? arr[0] : undefined;
}

export function range(
  start: number = 0,
  end: number = start,
  iteration: number = 1,
  isRight: boolean = false
): number[] {
  const arr = [];

  if (isNaN(start) || isNaN(end) || isNaN(iteration)) {
    console.error("Error: Argument of the wrong type");
    return undefined;
  }

  if (start === 0 && start === end && iteration === 1) {
    return arr;
  }

  const sign = end < 0 ? -1 : 1;
  start = Math.abs(start);
  end = Math.abs(end);
  iteration = Math.abs(iteration);
  const ind = start === end ? 0 : start;

  if (iteration === 0) {
    return new Array(Math.abs(end - ind)).fill(start);
  }

  for (let i = ind; i < end; i += iteration) {
    const num = i !== 0 ? i * sign : 0;
    arr.push(num);
  }
  return isRight ? arr.reverse() : arr;
}

export function rangeRight(
  start: number,
  end: number = start,
  iteration: number = 1,
  isRight?: boolean
): number[] {
  return range(start, end, iteration, true);
}

export function isEmpty(arg: any): boolean {
  if (!arg) {
    return true;
  }

  const type = typeof arg;

  switch (type) {
    case "object":
      if (
        (arg.constructor === Object && Object.keys(arg).length === 0) ||
        (Array.isArray(arg) && arg.length === 0) ||
        (arg.constructor === Set && arg.size === 0) ||
        (arg.constructor === Map && arg.size === 0)
      ) {
        return true;
      }
      return false;

    case "number":
    case "boolean":
      return true;

    default:
      return false;
  }
}

export function render(query: string, page: MessengerPage) {
  const root = document.querySelector(query);
  if (!root) {
    throw Error(`No block "${query}"`);
  }
  root.append(page.render());
  return root;
}

export function capitalize(string: string): string {
  if (typeof string !== "string") {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function trim(string: string, chars?: string): string {
  if (string && !chars) {
    return string.trim();
  }

  const reg = new RegExp(`[${chars}]`, "gi");
  return string.replace(reg, "");
}

type Indexed<T = unknown> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (let p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  const result = path.split(".").reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any
  );
  return merge(object as Indexed, result);
}

type PlainObject<T = unknown> = {
  [k in string]: T;
};

export function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

export function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

export function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}

export function getKey(key: string, parentKey?: string) {
  return parentKey ? `${parentKey}[${key}]` : key;
}

export function getParams(data: PlainObject | [], parentKey?: string) {
  const result: [string, string][] = [];

  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }

  return result;
}

export function cloneDeep<T extends object = object>(obj: T) {
  return (function _cloneDeep(
    item: T
  ): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
    if (item === null || typeof item !== "object") {
      return item;
    }

    if (item instanceof Date) {
      return new Date(item.valueOf());
    }

    if (item instanceof Array) {
      let copy = [];

      item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])));

      return copy;
    }

    if (item instanceof Set) {
      let copy = new Set();

      item.forEach((v) => copy.add(_cloneDeep(v)));

      return copy;
    }

    if (item instanceof Map) {
      let copy = new Map();

      item.forEach((v, k) => copy.set(k, _cloneDeep(v)));

      return copy;
    }

    if (item instanceof Object) {
      let copy: object = {};

      Object.getOwnPropertySymbols(item).forEach(
        (s) => (copy[s] = _cloneDeep(item[s]))
      );

      Object.keys(item).forEach((k) => (copy[k] = _cloneDeep(item[k])));

      return copy;
    }

    throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}

type StringIndexed = Record<string, any>;

export function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    const value = data[key];
    const endLine = index < keys.length - 1 ? "&" : "";

    if (Array.isArray(value)) {
      const arrayValue = value.reduce<StringIndexed>(
        (result, arrData, index) => ({
          ...result,
          [`${key}[${index}]`]: arrData,
        }),
        {}
      );

      return `${result}${queryStringify(arrayValue)}${endLine}`;
    }

    if (typeof value === "object") {
      const objValue = Object.keys(value || {}).reduce<StringIndexed>(
        (result, objKey) => ({
          ...result,
          [`${key}[${objKey}]`]: value[objKey],
        }),
        {}
      );

      return `${result}${queryStringify(objValue)}${endLine}`;
    }

    return `${result}${key}=${value}${endLine}`;
  }, "");
}

export function queryString(data: PlainObject) {
  if (!isPlainObject(data)) {
    throw new Error("Data must be an object");
  }

  return getParams(data)
    .map((arr) => arr.join("="))
    .join("&");
}

export function addError(
  className: string,
  txt: string,
  whereAdd: string = "afterBegin"
): void {
  const block = document.querySelector(`${className}`);
  const errorBlock = document.querySelector(`${className} .error-block`);

  if (!block) {
    return;
  }

  if (!errorBlock) {
    block.insertAdjacentHTML(whereAdd, `<div class="error-block">${txt}</div>`);
  } else {
    errorBlock.textContent = txt;
  }
}
