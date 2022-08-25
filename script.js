//button on click run getInput()
function toInput() {
  let button = document.querySelectorAll(".button");
  button.forEach((btn) => btn.addEventListener("click", getInput));
}

toInput();

//button value to input (calculator screen)
function getInput() {
  let input = document.querySelector("input");
  input.value += this.value;
  let str = [input.value];
  let toRun = String(str);
  let regex = /\W\d/;
  console.log("basic", toRun);

  if (regex.test(toRun)) {
    console.log(operate(toRun));
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
    return sum;
  }
}

function multiply(str) {
  let input = document.querySelector("input");
  let arr = str.split("*");
  let value = arr[0] * arr[1];
  return (input.value = value);
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
