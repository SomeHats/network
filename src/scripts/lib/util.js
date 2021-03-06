// @flow

export const lerp = (a: number, b: number, n: number): number =>
  a + n * (b - a);

export const mapRange = (
  a1: number,
  b1: number,
  a2: number,
  b2: number,
  n: number,
): number => lerp(a2, b2, (n - a1) / (b1 - a1));

export const constrain = (min: number, max: number, n: number): number =>
  Math.min(max, Math.max(min, n));

export const random = (min: number, max: number): number =>
  lerp(min, max, Math.random());

export const randomInt = (min: number, max: number): number =>
  Math.floor(random(min, max));

export const sample = <T>(arr: T[]): T => arr[randomInt(0, arr.length)];

export const flatten = <T>(arr: T[][]): T[] =>
  arr.reduce((a, b) => a.concat(b), []);

export const uniq = <T>(arr: T[]): T[] =>
  arr.filter((item, i) => arr.indexOf(item) === i);

export const compact = <T>(arr: (?T)[]): T[] =>
  // $FlowFixMe
  arr.filter(item => item != null);

export const normaliseAngle = (angle: number): number =>
  Math.atan2(Math.sin(angle), Math.cos(angle));

export const varyAbsolute = (base: number, amount: number): number =>
  random(base - amount, base + amount);

export const varyRelative = (base: number, amount: number): number =>
  varyAbsolute(base, base * amount);

export const times = <T>(count: number, fn: number => T): T[] => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(fn(i));
  }
  return result;
};

export const shuffle = <T>(arr: T[]): T[] =>
  arr
    .map(item => [item, Math.random()])
    .sort((a, b) => a[1] - b[1])
    .map(entry => entry[0]);
