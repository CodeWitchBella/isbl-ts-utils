# @isbl/ts-utils

[![MIT License](https://img.shields.io/npm/l/@isbl/ts-utils?style=flat)](https://github.com/CodeWitchBella/isbl-ts-utils/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@isbl/ts-utils?style=flat)](https://www.npmjs.com/package/@isbl/ts-utils)
[![dependencies](https://img.shields.io/librariesio/release/npm/@isbl/ts-utils?style=flat)](https://github.com/CodeWitchBella/isbl-ts-utils/blob/main/package.json)
![GitHub last commit](https://img.shields.io/github/last-commit/CodeWitchBella/isbl-ts-utils?style=flat)
[![GitHub Release Date](https://img.shields.io/github/release-date/CodeWitchBella/isbl-ts-utils?style=flat)](https://github.com/CodeWitchBella/isbl-ts-utils/releases)

Few utils for working in typescript which I found myself writing over and over
again.

## notNull

Equivalent to `a => a !== null`, but also works as type assertion. Usage example:

```ts
function doStuff(input: number[]) {
  return input.map(item => item === 2 ? null : item).filter(notNull)
}
```

Return type of this function is `number[]`, not `(number | null)[]` as it would
be otherwise.
