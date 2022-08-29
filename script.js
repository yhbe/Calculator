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

let specialSigns = document.querySelectorAll(".signs");
specialSigns.forEach((button) =>
  button.addEventListener("click", () => specialSign(button.value))
);

//set calculator input screen to the buttons pressed
function buttonPressed() {
  currentValue += this.value;
  input.value = sliceInput(currentValue);
}

function operationPress(value) {
  document.querySelector(".dot").disabled = false;
  operation = value;
  // on first operationPress, get the number you want to work with && operation ready to be transformed. Next operationPress run calculate()
  if (workingValue == null) {
    workingOperation = operation;
    operation = "";
    workingValue = currentValue;
    input.value = sliceInput(workingValue);
    currentValue = "";
  } else {
    calculate();
  }
}

// workingOperation? /*-+   workingValue /*-+ currentValue
function calculate() {
  workingValue = Number(workingValue);
  currentValue = Number(currentValue);

  if (workingOperation == "/") {
    //if dividing by zero reset
    if (currentValue == 0) {
      return error();
    }
    //resets workingOperation to current operation so you can string together 5*5/6+8-3
    workingOperation = operation;
    workingValue = workingValue / currentValue;
    input.value = sliceInput(workingValue);
    //resets currentValue so on next operation press the workingValue can be transformed again
    currentValue = "";
  } else if (workingOperation == "*") {
    workingOperation = operation;
    workingValue = workingValue * currentValue;
    input.value = sliceInput(workingValue);
    currentValue = "";
  } else if (workingOperation == "-") {
    workingOperation = operation;
    workingValue = workingValue - currentValue;
    input.value = sliceInput(workingValue);
    currentValue = "";
  } else if (workingOperation == "+") {
    workingOperation = operation;
    workingValue = workingValue + currentValue;
    input.value = sliceInput(workingValue);
    currentValue = "";
  } else if (workingOperation == "=" || workingOperation == "Enter") {
    if (workingOperation == 0 && currentValue == "0") {
      workingOperation = "";
    }
    workingOperation = operation;
    currentValue = "";
  }
}

function error() {
  currentValue = "";
  workingValue = null;
  operation = "";
  workingOperation = null;
  input.value = "0";
}
error();

// if AC,+/-,% button is pressed
function specialSign(value) {
  if (value == "AC") {
    error();
    value = "";
  } else if (value == "+/-" || value == "^") {
    currentValue = currentValue - currentValue * 2;
    input.value = currentValue;
  } else if (value == "%") {
    currentValue = currentValue / 100;
    input.value = currentValue;
  } else if (value == ".") {
    currentValue = currentValue + ".";
    input.value = currentValue;
    document.querySelector(".dot").disabled = true;
  }
}

document.onkeydown = (e) => {
  if (Number(e.key) || e.key == "0") {
    currentValue += e.key;
    input.value =
      currentValue.length > 7
        ? String(currentValue).slice(0, 7) + ".."
        : currentValue;
  } else if (
    e.key == "*" ||
    e.key == "/" ||
    e.key == "-" ||
    e.key == "+" ||
    e.key == "=" ||
    e.key == "Enter"
  ) {
    operationPress(e.key);
  } else if (e.key == "%") {
    specialSign(e.key);
  } else if (e.key == "^") {
    specialSign(e.key);
  } else if (e.key == "Backspace") {
    currentValue = currentValue.slice(0, -1);
    input.value = currentValue;
    if (currentValue.length == "0") {
      error();
    }
  } else if (e.key == "Escape") {
    error();
  }
};

function sliceInput(value) {
  return String(value).length > 7
    ? String(value).slice(0, 7) + ".."
    : String(value);
}
