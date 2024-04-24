export function getTagType(o: unknown): string {
  const tag = Object.prototype.toString.call(o);
  return tag.replace(/[[\]]/g, '').split(/\s+/).slice(1).join(' ');
}

export function isNumber(n: unknown): n is number {
  return typeof n === 'number';
}

export function isAnyNumber(n: unknown): n is number | bigint {
  return isNumber(n) || typeof n === 'bigint';
}

export function isNumberLike(n: unknown): boolean {
  // @ts-expect-error ts(2367)
  // eslint-disable-next-line eqeqeq
  return isAnyNumber(n) || (typeof n === 'string' && !!n && n == Number(n));
}

export function isDate(d: unknown, includingInvalid = true): d is Date {
  return (
    typeof d === 'object' &&
    getTagType(d) === 'Date' &&
    (!includingInvalid ? !Number.isNaN(Number(d)) : true)
  );
}

export function isDateLike(d: unknown, includingInvalid = false): boolean {
  return (
    isDate(d, includingInvalid) ||
    (typeof d === 'string' && !Number.isNaN(Date.parse(d)))
  );
}

export function isNumeric(n: unknown): boolean {
  return isNumberLike(n) && !Number.isNaN(n);
}

export function isNullish(n: unknown): n is null | undefined {
  return n == null;
}
