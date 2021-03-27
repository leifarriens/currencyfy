const { currencyfy } = require('./index.js');

test('valid number without currency', () => {
  expect(currencyfy('18.9')).toBe('18,90');
});

test('valid number with currency', () => {
  expect(currencyfy('18.9', 'EUR')).toBe('18,90 EUR');
});

test('valid number with more than two decimals', () => {
  expect(currencyfy('18.9449', 'EUR')).toBe('18,94 EUR');
});

test('valid number with currency', () => {
  expect(currencyfy('18.9', 'EUR')).toBe('18,90 EUR');
});

test('valid number without deciamls', () => {
  expect(currencyfy(18, 'EUR')).toBe('18,- EUR');
});

test('valid number without deciamls', () => {
  expect(currencyfy(18, 'EUR')).toBe('18,- EUR');
});

test('valid number without deciamls with zeros shown', () => {
  expect(currencyfy(18, 'EUR', { showzero: true })).toBe('18,00 EUR');
});

test('valid number without gap', () => {
  expect(currencyfy(18.95, '€', { gap: false })).toBe('18,95€');
});

test('valid number with currency before', () => {
  expect(currencyfy(18.95, '€', { before: true })).toBe('€ 18,95');
});

test('valid number . as spacer', () => {
  expect(currencyfy(18.95, 'EUR', { spacer: '.' })).toBe('18.95 EUR');
});

test('undefined return empty string', () => {
  expect(currencyfy()).toBe('');
});

test('invalid number return empty string', () => {
  expect(currencyfy('abc')).toBe('');
});
