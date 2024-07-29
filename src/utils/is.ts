const is = (val: any, target: string) =>
  Object.prototype.toString.call(val) === `[object ${target}]`;

export const isRegExp = (val: unknown): val is RegExp => is(val, 'RegExp');

export const isArray = (val: unknown): val is Array<any> => is(val, 'Array');

export const isNullOrUndef = (val: unknown): val is null | undefined =>
  val === undefined || val === null;

export const isFn = (val: unknown): val is Function => is(val, 'Function');
