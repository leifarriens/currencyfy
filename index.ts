interface ICurrencyfy {
  amount: number;
  currency: string;
  options?: ICurrencyfyOptions;
}

interface ICurrencyfyOptions {
  before: boolean;
  gap: boolean;
  showzero: boolean;
}

// Wrapper function for Class
export function Currencyfy(
  amount: string,
  currency: string,
  options?: ICurrencyfyOptions
) {
  return new CurrencyfyClass(amount, currency, options);
}

export class CurrencyfyClass {
  amount: number;
  currency: string;
  options?: ICurrencyfyOptions;

  constructor(amount: string, currency: string, options: ICurrencyfyOptions) {
    const defaultSettings = {
      before: true,
      gap: true,
      showzero: false
    };
    this.amount = parseFloat(amount.toString().replace(',', '.'));
    this.currency = currency;
    this.options = { ...defaultSettings, ...options };
  }

  private validate(value: string | number): number {
    if (typeof value === 'string') {
      return parseFloat(parseFloat(value).toFixed(2));
    }

    return parseFloat(value.toFixed(2));
  }

  format() {
    const amountString = this.getAmount();
    const { before, gap } = this.options;

    const gapString = gap ? ' ' : '';
    return before
      ? `${this.currency}${gapString}${amountString}`
      : `${amountString}${gapString}${this.currency}`;
  }

  private toNumberForMath(arg: ICurrencyfy | number | string): number {
    switch (typeof arg) {
      case 'object':
        return arg.amount;
      case 'number':
        return arg;
      case 'string':
        return parseFloat(arg.replace(',', '.'));
      default:
        throw new Error('ABLDI');
    }
  }

  add(arg: ICurrencyfy | number | string) {
    this.amount = this.validate(this.amount + this.toNumberForMath(arg));
    return this;
  }

  subtract(arg: ICurrencyfy | number | string) {
    this.amount = this.validate(this.amount - this.toNumberForMath(arg));
    return this;
  }

  multiply(multiplyer: number) {
    this.amount = this.validate(this.amount * multiplyer);
    return this;
  }

  allocate(value: number | string) {
    this.amount = this.validate(value);
    return this;
  }

  getAmount() {
    return this.amount.toFixed(2).toString().replace('.', ',');
  }
}

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
