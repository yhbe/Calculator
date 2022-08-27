let currentValue = "";
let previousValue = "";
let operation = "";
let previousOperation = "";
let input = document.querySelector("input");

// on button press run buttonPressed
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", buttonPressed));

//on one of the operations being pressed run operationPress
let operationSigns = document.querySelectorAll(".operation");
operationSigns.forEach((button) =>
  button.addEventListener("click", () => operationPress(button.value))
);

//set calculator input screen to the buttons pressed
function buttonPressed() {
  currentValue += this.value;
  input.value += this.value;
  return currentValue;
}

//on operation press
function operationPress(value) {
  let operation = value;
  previousValue = currentValue;
  currentValue = "";
  return previousValue, operation, currentValue;
}

//operate operation on paramaters
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
