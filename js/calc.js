const add = (a, b) => a + b;
const substract = (a, b) => add(a, b * -1);
const mult = (a, b) => a * b;
const divide = (a, b) => mult(a, 1 / b);

function operate(a, op, b) {
  if (a != null && b != null) {
    switch (op) {
      case "+":
        return add(a, b);
      case "-":
        return substract(a, b);
      case "x":
        return mult(a, b);
      case "/":
        return b ? divide(a, b) : "Math ERROR";
      default:
        return "Syntax ERROR";
    }
  } else return "Syntax ERROR";
}

function wipe() {
  lOp = null;
  rOp = null;
  operation = null;
  inputField.textContent = "";
}

const buttons = document.querySelectorAll(".calcBtns button");
const inputField = document.querySelector(".calcInput");
// const resultField = document.querySelector(".calcResult");
let lOp = null;
let rOp = null;
let operation = null;

/* Add event listeners for each calculator button. */
buttons.forEach((btn) => {
  // Add event listeners for number buttons
  if (!isNaN(btn.textContent)) {
    btn.addEventListener("click", () => {
      inputField.textContent += btn.textContent;
    });
  }
  // Add event listener for C button
  else if (btn.className == "btnClear") btn.addEventListener("click", wipe);
  // Add event listener for = button
  else if (btn.className == "btnResult") {
    btn.addEventListener("click", () => {
      if (operation) {
        rOp = inputField.textContent.slice(
          inputField.textContent.indexOf(operation) + 1,
        );
        if (rOp === "") inputField.textContent = "Syntax ERROR";
        else {
          rOp = Number(rOp);
          inputField.textContent = operate(lOp, operation, rOp);
          lOp = +inputField.textContent;
          operation = rOp = null;
        }
      }
    });
  }
  // Add event listener for operation buttons
  else {
    btn.addEventListener("click", () => {
      if (!lOp) lOp = +inputField.textContent;
      operation = btn.textContent;
      inputField.textContent += operation;
    });
  }
});
