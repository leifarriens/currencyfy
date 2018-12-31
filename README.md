# currencyfy

_convert numbers to displayable currency_

`currencyfy` will convert your numbers to currency

## Installation

This is a [Node.js](https://nodejs.org) module available through the [npm registry](https://www.npmjs.com/). Installation is done using the `npm install` command:

```bash
$ npm install currencyfy
```

Or manually [download]() it.

## Usage

1. Include `currencyfy`

Import

```javascript
import currencyfy from 'currencyfy'
```

Or link `currencyfy.js` in your HTML:

```html
<script src="currencyfy.js"></script>
```

2. Currencyfy your number

```javascript
currencyfy(19.9, '€');
```

becomes

```bash
19,99 €
```

3. Use custom settings
```javascript
currencyfy(23, '€', {
  before: true,
  showzero: false
});
```

becomes

```bash
€ 23,-
```
