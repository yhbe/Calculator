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

console.log(operate("7/22"));
