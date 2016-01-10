# genoset-249

This script determines if you have an increased risk of developing Parkinson's Disease, as per [gs249](http://www.snpedia.com/index.php/Gs249)

## Compatibility

This genoset is to be used with DNA-JSON. See [dna2json](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var increasedRiskOfParkinsons = require('genoset-249');
var dna = require('./dna.json');

console.log(increasedRiskOfParkinsons(dna));
// → `true` or `false`
```

## Contributions

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write Test(s)
- Submit Pull Request


## Author

| [![twitter/kevco54](https://gravatar.com/avatar/c3f0cac49ad7d267cb58499a86bfdd19)](https://twitter.com/kevco54 "Follow @kevco54 on Twitter") |
|---|
| [Kevin Collins](https://iamkevin.co/) |

## License

_genoset-249_ is available under the [MIT](https://mths.be/mit) license.
