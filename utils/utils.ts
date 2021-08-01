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

export function render(query, component) {
  const root = document.querySelector(query);
  if (!root) {
    throw Error(`No block "${query}"`);
  }
  root.innerHTML = "";
  root.append(component);
  return root;
}

export function capitalize(string: string): string {
  if (typeof string !== "string") {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
