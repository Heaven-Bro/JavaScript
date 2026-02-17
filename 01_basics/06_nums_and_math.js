const score = 400

const bankBalance = new Number(1200)
console.log(bankBalance);

console.log(bankBalance.toString().length);
console.log(bankBalance.toFixed(1));  // round to 2 decimal places

const othernumber = 123.456789
console.log(othernumber.toFixed(2));  // round to 2 decimal places
console.log(othernumber.toPrecision(4));  // round to 4 significant digits

const hundred = 100000000
console.log(hundred.toLocaleString('en-IN'));  // format number with commas



//**************Math**************

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-5));  // absolute value(negetive to positive) just change the sign
console.log(Math.round(4.5));  // round to nearest integer
console.log(Math.ceil(4.2));  // round up to the nearest integer
console.log(Math.floor(4.7));  // round down to the nearest integer
console.log(Math.max(1, 5, 3));  // find the maximum value
console.log(Math.min(1, 5, 3));  // find the minimum value


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));