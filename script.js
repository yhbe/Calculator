let input = document.querySelector("input");
let button = document.querySelectorAll("button");

//button on click run getInput()
function toInput() {
  let button = document.querySelectorAll(".button");
  button.forEach((btn) => btn.addEventListener("click", getInput));
}

toInput();

//button value to input (calculator screen)
function getInput() {
  input.value += this.value;

  let regex = /[0-9]+\W[0-9]+\W/;
  if (regex.test(input.value)) {
    operate(input.value);
  }
}

function add(str) {
  let arr = str.split("+");
  return +arr[0] + +arr[1];
}

function subtract(str) {
  let arr = str.split("-");
  return subtractnow(arr);

  function subtractnow(arr) {
    let sum = arr[0] - arr[1];
    return (input.value = sum + operation);
  }
}

function multiply(str) {
  let arr = str.split("*");
  let value = arr[0] * arr[1];
  return (input.value = value + operation);
}

function divide(str) {
  let arr = str.split("/");
  return arr[0] / arr[1];
}

function operate(str) {
  if (str.includes("+")) {
    return add(str);
  } else if (str.includes("-")) {
    return subtract(str);
  } else if (str.includes("*")) {
    return multiply(str);
  } else if (str.includes("/")) {
    return divide(str);
  }
}

let operation = [];
function operand(value) {
  let str = "";
  return (operation = value);
}
