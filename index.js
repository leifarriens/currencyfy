const currencyfy = function (number, currency, options) {

  // validate number
  if (isNaN(number)) {
    // invalid number
    console.error(`"${number}" is not a valid number`);
    return null;
  } else {
    // number is valid

    // split decimal .
    let split = number.toString().split('.');

    if (split[1]) {
      if (split[1].length == 1) {
        split[1] += '0';
      }
      if(split[1].length >= 2) {
        split[1] = split[1].substring(0, 2);
      }
    }
    if (split.length <= 1) {
      if (!options.showzero) {
        split[1] = '-';
      } else {
        split[1] = '00';
      }
    }

    let spacer;
    if(options.spacer) {
      spacer = options.spacer;
    } else {
      spacer = ',';
    }


    // OPTION GAP
    const gap = () => {
      if(options.gap == null) {
        return ' ';
      } else if(!options.gap) return ''
      else return ' ';
    }

    const numberString = `${split[0]}${spacer}${split[1]}`;

    if (options.before) {
      return `${currency}${gap()}${numberString}`;
    } else {
      return `${numberString}${gap()}${currency}`;
    }
  }
}

module.exports = currencyfy;