// OPERATIONS

const add = (a, b) => a + b;
const substract = (a, b) => add(a, b * -1);
const mult = (a, b) => a * b;
const divide = (a, b) => mult(a, 1 / b);

console.log(add(2, 3));
console.log(substract(5, 3));
console.log(mult(2, 3));
console.log(divide(6, 3));
