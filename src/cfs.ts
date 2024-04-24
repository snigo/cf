import { isDateLike, isNullish, isNumeric } from './isit.js';
import type { CompareOpts } from './types.js';

export function cfAlphanumeric<V>(a: V, b: V, opts?: CompareOpts): number {
  const {
    direction = 'asc',
    nullOrder = 'natural',
    locale = 'us',
  } = opts ?? {};
  if (nullOrder !== 'natural') {
    if (isNullish(a) && isNullish(b)) return 0;
    if (isNullish(a)) return nullOrder === 'first' ? -1 : 1;
    if (isNullish(b)) return nullOrder === 'first' ? 1 : -1;
  }
  const _start = String(direction === 'asc' ? a : b);
  const _end = String(direction === 'asc' ? b : a);
  return Intl.Collator(locale, opts?.collatorOptions).compare(_start, _end);
}

export function cfNumeric<V>(a: V, b: V, opts?: CompareOpts): number {
  const { direction = 'asc', nullOrder = 'last' } = opts ?? {};
  if (nullOrder !== 'natural') {
    if (isNullish(a) && isNullish(b)) return 0;
    if (isNullish(a)) return nullOrder === 'first' ? -1 : 1;
    if (isNullish(b)) return nullOrder === 'first' ? 1 : -1;
  }
  if (!isNumeric(a) && !isNumeric(b)) return cfAlphanumeric(a, b, opts);
  if (!isNumeric(a)) return direction === 'asc' ? 1 : -1;
  if (!isNumeric(b)) return direction === 'asc' ? -1 : 1;
  const _start = Number(direction === 'asc' ? a : b);
  const _end = Number(direction === 'asc' ? b : a);
  return _start - _end;
}

export function cfDateTime<V>(a: V, b: V, opts?: CompareOpts): number {
  const {
    direction = 'asc',
    nullOrder = 'natural',
    includeInvalidDates = false,
  } = opts ?? {};
  if (nullOrder !== 'natural') {
    if (isNullish(a) && isNullish(b)) return 0;
    if (isNullish(a)) return nullOrder === 'first' ? -1 : 1;
    if (isNullish(b)) return nullOrder === 'first' ? 1 : -1;
  }
  if (
    !isDateLike(a, includeInvalidDates) &&
    !isDateLike(b, includeInvalidDates)
  ) {
    return cfAlphanumeric(a, b, { direction, nullOrder });
  }
  if (!isDateLike(a, includeInvalidDates)) return direction === 'asc' ? 1 : -1;
  if (!isDateLike(b, includeInvalidDates)) return direction === 'asc' ? -1 : 1;
  const _sa = String(a);
  const _sb = String(b);
  const _start = Date.parse(direction === 'asc' ? _sa : _sb);
  const _end = Date.parse(direction === 'asc' ? _sb : _sa);
  return _start - _end;
}
