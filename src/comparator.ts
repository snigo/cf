import { cfAlphanumeric, cfDateTime, cfNumeric } from './cfs.js';
import type {
  CompareFn,
  CompareOpts,
  ExecutableComparator,
  NullOrder,
  SortingOrder,
} from './types.js';

function identitySelector<V>(v: V) {
  return v;
}

export function toExecutableComparator<V, T>(comparator: Comparator<V, T>) {
  return Object.assign(function (a: V, b: V) {
    return comparator.compare(a, b);
  }, comparator);
}

export class Comparator<V, T = V> {
  private comparator: CompareFn<V | T> = cfAlphanumeric;

  compare(a: V, b: V): number {
    return this.comparator(this.selector(a), this.selector(b), {
      direction: this.direction,
      nullOrder: this.nullOrder,
      locale: this.locale,
      collatorOptions: this.collatorOptions,
      includeInvalidDates: this.includeInvalidDates,
    });
  }

  direction: SortingOrder = 'asc';

  nullOrder: NullOrder = 'natural';

  locale: string | string[] = 'us';

  collatorOptions: Intl.CollatorOptions | undefined = undefined;

  includeInvalidDates: boolean = false;

  selector: (v: V) => T | V = identitySelector;

  asc: () => ExecutableComparator<V, T>;

  desc: () => ExecutableComparator<V, T>;

  alpha: (
    opts?: Pick<CompareOpts, 'locale' | 'collatorOptions'>,
  ) => ExecutableComparator<V, T>;

  numeric: () => ExecutableComparator<V, T>;

  datetime: (
    opts?: Pick<CompareOpts, 'includeInvalidDates'>,
  ) => ExecutableComparator<V, T>;

  nullFirst: () => ExecutableComparator<V, T>;

  nullLast: () => ExecutableComparator<V, T>;

  nullNatural: () => ExecutableComparator<V, T>;

  select: (selector: (v: V) => T | V) => ExecutableComparator<V, T>;

  constructor() {
    this.asc = function () {
      this.direction = 'asc';
      return toExecutableComparator(this);
    };
    this.asc = this.asc.bind(this);

    this.desc = function () {
      this.direction = 'desc';
      return toExecutableComparator(this);
    };
    this.desc = this.desc.bind(this);

    this.alpha = function (opts) {
      if (opts?.locale) {
        this.locale = opts.locale;
      }
      if (opts?.collatorOptions) {
        this.collatorOptions = opts.collatorOptions;
      }
      this.comparator = cfAlphanumeric;
      return toExecutableComparator(this);
    };
    this.alpha = this.alpha.bind(this);

    this.numeric = function () {
      this.comparator = cfNumeric;
      return toExecutableComparator(this);
    };
    this.numeric = this.numeric.bind(this);

    this.datetime = function (opts) {
      if (opts?.includeInvalidDates) {
        this.includeInvalidDates = opts.includeInvalidDates;
      }
      this.comparator = cfDateTime;
      return toExecutableComparator(this);
    };
    this.datetime = this.datetime.bind(this);

    this.nullFirst = function () {
      this.nullOrder = 'first';
      return toExecutableComparator(this);
    };
    this.nullFirst = this.nullFirst.bind(this);

    this.nullLast = function () {
      this.nullOrder = 'last';
      return toExecutableComparator(this);
    };
    this.nullLast = this.nullLast.bind(this);

    this.nullNatural = function () {
      this.nullOrder = 'natural';
      return toExecutableComparator(this);
    };
    this.nullNatural = this.nullNatural.bind(this);

    this.select = function (selector: (v: V) => T | V) {
      this.selector = selector;
      return toExecutableComparator(this);
    };
    this.select = this.select.bind(this);
  }
}
