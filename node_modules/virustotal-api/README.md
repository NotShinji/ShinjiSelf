# virustotal-api

[![https://nodei.co/npm/virustotal-api.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/virustotal-api.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/virustotal-api)

[Virustotal API v2.0](https://developers.virustotal.com/v2.0/reference) wrapper class

## Install

```shell
npm i virustotal-api
```

## Example

```javascript
const fs = require("fs");
const VirusTotalApi = require("virustotal-api");
const virusTotal = new VirusTotalApi("<YOUR API KEY>");

fs.readFile(__filename, (err, data) => {
  if (err) {
    console.log(`Cannot read file. ${err}`);
  } else {
    virusTotal
      .fileScan(data, "file.js")
      .then(response => {
        let resource = response.resource;
        // sometimes later try:
        virusTotal.fileReport(resource).then(result => {
          console.log(result);
        });
      })
      .catch(err => console.log(`Scan failed. ${err}`));
  }
});
```

For more info please refer to [documentation](./docs/virus-total.md)

## Changes

### Version 1.1.4

- Dependency update to fix security vulnerabilities.

### Version 1.1.3

- Dependency update to fix security vulnerabilities.

### Version 1.1.2

- Some refactoring.
- Dependency update to fix security vulnerabilities.

### Version 1.1.1

- Dependency update to fix security vulnerabilities (eslint-utils, lodash).

### Version 1.1.0

- Passing `options` to web client ([needle](https://www.npmjs.com/package/needle)). Thanks to [@thepocp](https://github.com/thepocp).

### Version 1.0.5

- Dependency update to fix security vulnerabilities.

### Version 1.0.4

- Dependency update to fix security vulnerabilities (js-yaml).

### Version 1.0.3

- Dependency update to fix security vulnerabilities (lodash).

### Version 1.0.2

- Documentation updated to include error handling.
- Validating buffer size in `fileScan` in case anti-malware blocks access to file.

### Version 1.0.1

Documentation update on `urlReport`

### Version 1.0.0

Initial release
