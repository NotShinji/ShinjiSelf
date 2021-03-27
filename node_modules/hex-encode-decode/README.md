
# hex-encode-decode
[![package version](https://img.shields.io/npm/v/hex-encode-decode.svg?style=flat-square)](https://npmjs.org/package/hex-encode-decode)
[![package downloads](https://img.shields.io/npm/dm/hex-encode-decode.svg?style=flat-square)](https://npmjs.org/package/hex-encode-decode)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/hex-encode-decode.svg?style=flat-square)](https://npmjs.org/package/hex-encode-decode)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Hex encode & decode string

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install hex-encode-decode
$ # OR
$ yarn add hex-encode-decode
```

## Usage

```js
const { encode, decode } = require('./')

console.log(encode('hello'), decode('68656c6c6f')) // 68656c6c6f hello

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    