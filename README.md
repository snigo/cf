# @gigwork/cf

Compare functions for alphanumeric, numeric and datetime values

## Installation

```bash
# npm
npm install @gigwork/cf

# yarn
yarn add @gigwork/cf

# pnpm
pnpm add @gigwork/cf
```

## Usage

```javascript
import { cf } from '@gigwork/cf';

const randomArr = ['foo', 1234, '45', 'bar', 'zulu', null, '0x101'];

randomArr.toSorted(cf());
// => ['0x101', 1234, '45', 'bar', 'foo', null, 'zulu']

randomArr.toSorted(cf().desc());
// => ['zulu', null, 'foo', 'bar', '45', 1234, '0x101']

randomArr.toSorted(cf().nullLast());
// => ['0x101', 1234, '45', 'bar', 'foo', 'zulu', null]

randomArr.toSorted(cf().numeric().nullLast());
// => ['45', '0x101', 1234, 'bar', 'foo', 'zulu', null]
```

## Sorting nested data

You can sort by nested data with `.select()` function:

```javascript
const users = [
  {
    name: 'Mark',
    age: 34,
  },
  {
    name: 'Alice',
    age: 29,
  },
  {
    name: 'Zack',
    age: 18,
  },
  {
    name: 'Bob',
    age: null,
  },
];

users.toSorted(
  cf()
    .select(user => user.age)
    .nullLast(),
);
// => Zack, Alice, Mark, Bob
```
