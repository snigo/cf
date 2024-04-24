import { Comparator, toExecutableComparator } from './comparator.js';
import type { ExecutableComparator } from './types.js';

export function cf<V, T = V>(): ExecutableComparator<V, T> {
  const comparator = new Comparator<V, T>();
  return toExecutableComparator(comparator);
}
