let currentValue = "";
let workingValue = null;
let operation = "";
let workingOperation = null;

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

function operationPress(value) {
  operation = value;

  // on first operationPress, get the number you want to work with && operation ready to be transformed. Next operationPress run calculate()
  if (workingValue == null) {
    workingOperation = operation;
    operation = "";
    workingValue = currentValue;
    input.value = workingValue;
    currentValue = "";
  } else {
    calculate();
  }
}

// workingOperation? /*-+   workingValue /*-+ currentValue
function calculate() {
  if (workingOperation == "/") {
    if (currentValue == "0") {
      return error();
    }
    //resets workingOperation to current operation so you can string together 5*5/6+8-3
    workingOperation = operation;
    workingValue = workingValue / currentValue;
    input.value = workingValue;
    //resets currentValue so on next operation press the workingValue can be transformed again
    currentValue = "";
  } else if (workingOperation == "*") {
    workingOperation = operation;
    workingValue = workingValue * currentValue;
    input.value = workingValue;
    currentValue = "";
  } else if (workingOperation == "-") {
    workingOperation = operation;
    workingValue = workingValue - currentValue;
    input.value = workingValue;
    currentValue = "";
  } else if (workingOperation == "+") {
    workingOperation = operation;
    workingValue = Number(workingValue) + Number(currentValue);
    input.value = workingValue;
    currentValue = "";
  }
}

function error() {
  currentValue = "";
  workingValue = null;
  operation = "";
  workingOperation = null;
  input.value = "Error";
}
