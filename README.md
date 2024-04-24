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

randomArr.toSorted(cf()); // => ['0x101', 1234, '45', 'bar', 'foo', null, 'zulu']
randomArr.toSorted(cf().desc()); // => ['zulu', null, 'foo', 'bar', '45', 1234, '0x101']
randomArr.toSorted(cf().nullLast()); // => ['0x101', 1234, '45', 'bar', 'foo', 'zulu', null]
randomArr.toSorted(cf().numeric().nullLast()); // => ['45', '0x101', 1234, 'bar', 'foo', 'zulu', null]

const users = [
  { name: 'Bob', age: 49 },
  { name: 'Alice', age: null },
  { name: 'Diego', age: 14 },
  { name: null, age: 25 },
];

users.toSorted(
  cf()
    .select(user => user.name)
    .nullFirst(),
);
// => [{ "name": null, "age": 25 }, { "name": "Alice", "age": null }, { "name": "Bob", "age": 49 }, { "name": "Diego", "age": 14 }]

users.toSorted(
  cf()
    .select(user => user.age)
    .desc(),
);
// => [{ "name": "Bob", "age": 49 }, { "name": null, "age": 25 }, { "name": "Diego", "age": 14 }, { "name": "Alice", "age": null }]
```
