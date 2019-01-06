# currencyfy

_convert numbers to displayable currency_

`currencyfy` will convert your numbers to currency

## Installation

This is a [Node.js](https://nodejs.org) module available through the [npm registry](https://www.npmjs.com/). Installation is done using the `npm install` command:

```bash
$ npm install currencyfy
```

Or manually [download](https://github.com/leifarriens/currencyfy/blob/master/currencyfy.min.js) it.

## Usage

1. Include `currencyfy`

Import

```javascript
import currencyfy from 'currencyfy'
```

Require

```javascript
const currencyfy = require('currencyfy')
```

Or link `currencyfy.js` in your HTML:

```html
<script src="currencyfy.min.js">
```

2. Currencyfy your number

```javascript
currencyfy(19.9, '€');
```

converts to

```bash
19,90 €
```

3. Use custom settings
```javascript
currencyfy(23, '€', {
  before: true,
});
```

converts to

```bash
€ 23,-
```

4. Custom Settings

| parameter | value | default |
| ---------- | ---------- | ---------- |
| `before`   | `boolean`  | `false`    | 
| `gap`      | `boolean`  | `true`     | 
| `showzero` | `boolean`  | `false`    | 
| `spacer`   | `string`   | `,`        | 
