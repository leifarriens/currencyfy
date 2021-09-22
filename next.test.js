const { currencyfy, Currencyfy } = require('./index.js');

// console.log(currencyfy(1, '€'));
// console.log(currencyfy(1, '€').format());
// console.log(Currencyfy(0.99, '€').format());
console.log(
  Currencyfy(0.99, '€')
    .add('2.99')
    .add('100.00')
    .subtract(0.05)
    .multiply(2)
    .format()
);

const subtotal = Currencyfy('8,5', '€').add(5.9999899);

const versand = Currencyfy('10.1', '€', { gap: false, before: true });
console.log(versand.format());

// const total = subtotal.add(versand);
// console.log(total);
// console.log(Currencyfy(10.99, '€').add(Currencyfy('22.95', '€')));
// const myValue = currencyfy(0.2, '€');
// console.log(myValue.format());
// console.log(myValue.add(5).add(10).format());

console.log(subtotal.getAmount(), subtotal.currency);

// for project wide usage DO:

const curr = Currencyfy('', '$');

curr.allocate(1100);
console.log(curr.format());
