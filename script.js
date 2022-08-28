let currentValue = "";
let previousValue = null;
let operation = "";
let previousOperation = "";
let input = document.querySelector("input");

// on button press run buttonPressed
let buttons = document.querySelectorAll(".key");
buttons.forEach((button) => button.addEventListener("click", buttonPressed));

//on one of the operations being pressed run operationPress
let operationSigns = document.querySelectorAll(".operation");
operationSigns.forEach((button) =>
  button.addEventListener("click", () => operationPress(button.value))
);

//set calculator input screen to the buttons pressed
function buttonPressed() {
  currentValue += this.value;
  input.value = currentValue;
}

//on operation press
function operationPress(value) {
  operation = value;
  input.value = currentValue;

  if (previousValue == null) {
    previousOperation = operation;
    operation = "";
    previousValue = currentValue;
    input.value = previousValue;
    currentValue = "";
  } else {
    calculate();
  }
}

function calculate() {
  if (previousOperation == "/") {
    if (currentValue == "0") {
      return error();
    }
    previousOperation = operation;
    previousValue = previousValue / currentValue;
    input.value = previousValue;
    currentValue = "";
  } else if (previousOperation == "*") {
    previousOperation = operation;
    previousValue = previousValue * currentValue;
    input.value = previousValue;
    currentValue = "";
  }
}

function error() {
  currentValue = "";
  previousValue = null;
  input.value = "Error";
}
