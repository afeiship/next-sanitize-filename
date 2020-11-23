# next-sanitize-filename
> Sanitize a string to be safe for use as a filename by removing customize list.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-sanitize-filename
```

## usage
```js
import '@jswork/next-sanitize-filename';

const str = '牛津英语(牛津上海版)1A(一年级上册)(2007年08月第1版)';
nx.sanitizeFilename(str, {
  items: [
    [/\(/g, '_'],
    [/\)/g, '_'],
  ]
});
// 牛津英语_牛津上海版_1A_一年级上册__2007年08月第1版_
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-sanitize-filename/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-sanitize-filename
[version-url]: https://npmjs.org/package/@jswork/next-sanitize-filename

[license-image]: https://img.shields.io/npm/l/@jswork/next-sanitize-filename
[license-url]: https://github.com/afeiship/next-sanitize-filename/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-sanitize-filename
[size-url]: https://github.com/afeiship/next-sanitize-filename/blob/master/dist/next-sanitize-filename.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-sanitize-filename
[download-url]: https://www.npmjs.com/package/@jswork/next-sanitize-filename
