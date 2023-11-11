const add = (a, b) => a + b;
const mult = (a, b) => a * b;

function operate(a, op, b) {
  if (a !== "" && b !== "") {
    a = +a;
    b = +b;
    switch (op) {
      case "+":
        return add(a, b);
      case "-":
        return add(a, -b);
      case "x":
        return mult(a, b);
      case "/":
        return b ? mult(a, 1 / b) : "Math ERROR";
      default:
        return "Syntax ERROR";
    }
  } else return "Syntax ERROR";
}

function wipe() {
  lOp = rOp = op = inputField.textContent = "";
  returnedResult = false;
}

function getResult() {
  res = operate(lOp, op, rOp);
  if (isNaN(res)) {
    inputField.textContent = res;
    lOp = "";
  } else {
    lOp = res;
    inputField.textContent = Math.floor(lOp * 10 ** 3) / 10 ** 3;
  }
  op = rOp = "";
  returnedResult = true;
}

function addNumber() {
  if (returnedResult) wipe();

  if (op) {
    rOp += this.textContent;
    inputField.textContent += this.textContent;
  } else {
    lOp += this.textContent;
    inputField.textContent += this.textContent;
  }
}

function addOperator() {
  if (this.textContent === "-" && lOp === "") {
    lOp = "-";
    inputField.textContent += lOp;
  }
  if (this.textContent === "-" && (op === "/" || op === "x")) {
    rOp = " -";
    inputField.textContent += rOp;
  }

  if (rOp !== " -" && rOp !== "") getResult();

  if (lOp !== "-" && lOp !== "" && !op) {
    returnedResult = false;
    op = this.textContent;
    inputField.textContent += op;
  }
}

const numBtns = document.querySelectorAll(".numBtn");
const opBtns = document.querySelectorAll(".opBtn");
const clrBtn = document.querySelector(".clrBtn");
const resBtn = document.querySelector(".resBtn");
const inputField = document.querySelector(".calcInput");
let lOp, rOp, op;
let returnedResult = false;
wipe();

clrBtn.addEventListener("click", wipe);
resBtn.addEventListener("click", getResult);
numBtns.forEach((btn) => {
  btn.addEventListener("click", addNumber);
});
opBtns.forEach((btn) => {
  btn.addEventListener("click", addOperator);
});
