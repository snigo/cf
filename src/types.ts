import type { Comparator } from './comparator.js';

export type SortingOrder = 'asc' | 'desc';

export type NullOrder = 'first' | 'last' | 'natural';

export type CompareFn<V> = (a: V, b: V, opts?: CompareOpts) => number;

export interface CompareOpts {
  direction?: SortingOrder;
  nullOrder?: NullOrder;
  locale?: string | string[];
  collatorOptions?: Intl.CollatorOptions;
  includeInvalidDates?: boolean;
}

export type ComparatorCompareFn<V> = (a: V, b: V) => number;

export type ExecutableComparator<V, T = V> = Comparator<V, T> &
  ComparatorCompareFn<V>;
