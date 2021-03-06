"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyfy = void 0;
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
exports.currencyfy = currencyfy;
