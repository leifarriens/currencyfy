const currencyfy = function (number, currency, options) {

  let settings = { // default parameters
    before: false,
    gap: true,
    showzero: false,
    spacer: ','
  };

  // validate number
  if (isNaN(number) || typeof number === 'boolean') {
    // invalid number
    console.error(`"${number}" is not a valid number`);
    return '';
  } else {
    // number is valid

    // validate currency
    if (!isNaN(currency)) {
      console.error(`"${currency}" is not a valid currency. You may have written your decimal separator as "," instead of "."`);
      return '';
    } else {
      // check for options
      if (options) {
        // assign custom options to settings
        settings = {...settings, ...options}
      }

      // split decimal .
      let split = number.toString().split('.');

      if (split[1]) {
        if (split[1].length == 1) {
          split[1] += '0';
        }
        if (split[1].length >= 2) {
          split[1] = split[1].substring(0, 2);
        }
      }
      if (split.length <= 1) {
        if (!settings.showzero) {
          split[1] = '-';
        } else {
          split[1] = '00';
        }
      }

      let spacer;
      if (settings.spacer) {
        spacer = settings.spacer;
      } else {
        spacer = ',';
      }


      // OPTION GAP
      const gap = () => {
        if (settings.gap == null) {
          return ' ';
        } else if (!settings.gap) return ''
        else return ' ';
      }

      const numberString = `${split[0]}${spacer}${split[1]}`;

      if (settings.before) {
        return `${currency}${gap()}${numberString}`;
      } else {
        return `${numberString}${gap()}${currency}`;
      }
    }
  }
}

module.exports = currencyfy;