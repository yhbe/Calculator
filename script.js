let currentValue = "";
let previousValue = "";
let operation = "";
let previousOperation = "";

function operate(currentValue, previousValue, operation) {
  if (operation == "*") {
    return currentValue * previousValue;
  } else if (operation == "+") {
    return currentValue + previousValue;
  } else if (operation == "-") {
    return currentValue - previousValue;
  } else if (operation == "/") {
    return currentValue / previousValue;
  }
}

console.log(operate(50, 50, "/"));
