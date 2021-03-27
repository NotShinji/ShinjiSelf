# Phone Lookup Lib

[![Build Status](https://travis-ci.org/rubenandre/phonelookup.svg?branch=master)](https://travis-ci.org/rubenandre/phonelookup)

## NPM lib to get information about operator and country of a number.

## How to install:
```
    npm i lookup-phone
                  
    yarn add lookup-phone
```

## Usage:

```js
    const lookup = require('lookup-phone')

    lookup(35191999999).then(data => {
        console.log(data) // e.g. Vodafone, Portugal
    })
```
