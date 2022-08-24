function add(str) {
  let arr = str.split("+");
  return addnow(arr);

  function addnow(arr) {
    let sum = 0;
    for (let number of arr) {
      sum += +number;
    }
    return sum;
  }
}

function subtract(str) {
  let arr = str.split("-");
  return subtractnow(arr);

  function subtractnow(arr) {
    let sum = arr[0] - arr[1];
    return sum;
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(str) {
  if (str.includes("+")) {
    return add(str);
  } else if (str.includes("-")) {
    return subtract(str);
  }
}

console.log(operate("7-22"));
