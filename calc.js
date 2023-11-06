// OPERATIONS

const add = (a, b) => a + b;
const substract = (a, b) => add(a, b * -1);
const mult = (a, b) => a * b;
const divide = (a, b) => mult(a, 1 / b);

function operate(a, op, b) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "x":
      return mult(a, b);
    case "/":
      if (b) return divide(a, b);
      else return "Math Error";
  }
}
