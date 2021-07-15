import { Templator } from './Templator';

export function getObjValue(obj, path, defaultValue) {
  const keys = path.split('.');
  let result = obj;
  for (let key of keys) {
    result = result[key];
    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export function identity(value) {
  return value;
}

export function last(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  const length = arr.length;
  return length ? arr[length - 1] : undefined;
}

export function first(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  return arr.length ? arr[0] : undefined;
}

export function range(start = 0, end = start, iteration = 1, isRight = false) {
  const arr = [];

  if (isNaN(start) || isNaN(end) || isNaN(iteration)) {
    console.error('Error: Argument of the wrong type');
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

export function rangeRight(start, end = start, iteration = 1, isRight) {
  return range(start, end, iteration, true);
}

export function isEmpty(arg) {
  if (!arg) {
    return true;
  }

  const type = typeof arg;

  switch (type) {
    case 'object':
      if (
        (arg.constructor === Object && Object.keys(arg).length === 0) ||
        (Array.isArray(arg) && arg.length === 0) ||
        (arg.constructor === Set && arg.size === 0) ||
        (arg.constructor === Map && arg.size === 0)
      ) {
        return true;
      }
      return false;

    case 'number':
    case 'boolean':
      return true;

    default:
      return false;
  }
}

export function domCreate(tagName, classes = '') {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
}

export function returnTmpl(template, stateModule) {
  const tmpl = new Templator(template);
  return tmpl.compile(stateModule);
}
