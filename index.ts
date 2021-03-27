export function currencyfy(
  number: number,
  currency: any = '',
  options: object
): string {
  let settings = {
    // default parameters
    before: false,
    gap: true,
    showzero: false,
    spacer: ',',
    ...options
  };

  const isValidNumber = isNaN(number);
  const isValidCurrency = !currency || typeof currency === 'string';

  if (isValidNumber) {
    console.error(`"${number}" is not a valid number`);
    return '';
  }

  if (!isValidCurrency) {
    console.error(`"${currency}" is not a valid currency`);
    return '';
  }

  function formatAmount(number: number) {
    const rounded = Math.round(number * 100) / 100;

    const split = rounded.toString().split('.');

    if (split[1] && split[1].length === 1) {
      split[1] += '0';
    }

    if (!split[1]) {
      split[1] = settings.showzero ? '00' : '-';
    }
    return split.join(settings.spacer);
  }

  function gap() {
    return settings.gap && currency ? ' ' : '';
  }

  return settings.before
    ? `${currency}${gap()}${formatAmount(number)}`
    : `${formatAmount(number)}${gap()}${currency}`;
}
