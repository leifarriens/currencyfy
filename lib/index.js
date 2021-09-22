/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// Wrapper function for Class
function Currencyfy(amount, currency, options) {
    return new CurrencyfyClass(amount, currency, options);
}
var CurrencyfyClass = /** @class */ (function () {
    function CurrencyfyClass(amount, currency, options) {
        var defaultSettings = {
            before: true,
            gap: true,
            showzero: false
        };
        this.amount = parseFloat(amount.toString().replace(',', '.'));
        this.currency = currency;
        this.options = __assign(__assign({}, defaultSettings), options);
    }
    CurrencyfyClass.prototype.validate = function (value) {
        if (typeof value === 'string') {
            return parseFloat(parseFloat(value).toFixed(2));
        }
        return parseFloat(value.toFixed(2));
    };
    CurrencyfyClass.prototype.format = function () {
        var amountString = this.getAmount();
        var _a = this.options, before = _a.before, gap = _a.gap;
        var gapString = gap ? ' ' : '';
        return before
            ? "" + this.currency + gapString + amountString
            : "" + amountString + gapString + this.currency;
    };
    CurrencyfyClass.prototype.toNumberForMath = function (arg) {
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
    };
    CurrencyfyClass.prototype.add = function (arg) {
        this.amount = this.validate(this.amount + this.toNumberForMath(arg));
        return this;
    };
    CurrencyfyClass.prototype.subtract = function (arg) {
        this.amount = this.validate(this.amount - this.toNumberForMath(arg));
        return this;
    };
    CurrencyfyClass.prototype.multiply = function (multiplyer) {
        this.amount = this.validate(this.amount * multiplyer);
        return this;
    };
    CurrencyfyClass.prototype.allocate = function (value) {
        this.amount = this.validate(value);
        return this;
    };
    CurrencyfyClass.prototype.getAmount = function () {
        return this.amount.toFixed(2).toString().replace('.', ',');
    };
    return CurrencyfyClass;
}());
function currencyfy(number, currency, options) {
    if (currency === void 0) { currency = ''; }
    var settings = __assign({ 
        // default parameters
        before: false, gap: true, showzero: false, spacer: ',' }, options);
    var isValidNumber = isNaN(number);
    var isValidCurrency = !currency || typeof currency === 'string';
    if (isValidNumber) {
        console.error("\"" + number + "\" is not a valid number");
        return '';
    }
    if (!isValidCurrency) {
        console.error("\"" + currency + "\" is not a valid currency");
        return '';
    }
    function formatAmount(number) {
        var rounded = Math.round(number * 100) / 100;
        var split = rounded.toString().split('.');
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
        ? "" + currency + gap() + formatAmount(number)
        : "" + formatAmount(number) + gap() + currency;
}

export { Currencyfy, CurrencyfyClass, currencyfy };
