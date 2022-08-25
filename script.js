//button on click run getInput()
function toInput() {
  let button = document.querySelectorAll(".button");
  button.forEach((btn) => btn.addEventListener("click", getInput));
}

toInput();

//button value to input (calculator screen)
function getInput() {
  console.log(this.value);
  let input = document.querySelector("input");
  input.value = this.value;
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
  let arr = str.split("*");
  return arr[0] * arr[1];
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

console.log(operate("7*22"));
