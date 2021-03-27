# currencyfy

convert numbers to displayable currency

`currencyfy` will convert your numbers to currency

## Installation

This is a [Node.js](https://nodejs.org) module available through the [npm registry](https://www.npmjs.com/). Installation is done using the `npm install` command:

```bash
npm install currencyfy
```

Or manually [download](https://github.com/leifarriens/currencyfy/blob/master/currencyfy.min.js) it.

## Usage

### 1. Include `currencyfy`

Import

```js
import { currencyfy } from 'currencyfy';
```

Require

```js
const { currencyfy } = require('currencyfy');
```

### 2. Currencyfy your number

```js
currencyfy(19.9, '€');
```

converts to

```bash
19,90 €
```

### Custom settings

```js
currencyfy(23, '€', {
  before: true
});
```

converts to

```bash
€ 23,-
```

| parameter  | value     | default |
| ---------- | --------- | ------- |
| `before`   | `boolean` | `false` |
| `gap`      | `boolean` | `true`  |
| `showzero` | `boolean` | `false` |
| `spacer`   | `string`  | `,`     |
