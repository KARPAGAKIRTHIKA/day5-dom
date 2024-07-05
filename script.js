let expression = "";
let display = document.getElementById("display");

function appendNumber(number) {
  expression += number;
  display.textContent = expression;
}

function appendOperation(operator) {
  expression += operator;
  display.textContent = expression;
}

function clearDisplay() {
  expression = "";
  display.textContent = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    expression = result.toString();
    display.textContent = expression;
  } catch (error) {
    display.textContent = "Error";
  }
}
