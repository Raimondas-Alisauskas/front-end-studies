let output;
let firstNumber;
let secondNumber;
let operator;


function makeNumber(number) {
  firstNumber ? firstNumber = firstNumber + number : firstNumber = number
  document.getElementById('output').innerHTML = firstNumber
}


function getResult() {
  if (operator == 'plus') {

    document.getElementById('output').innerHTML = Number(firstNumber) + Number(secondNumber);
  }
  if (operator == 'diff') {
    document.getElementById('output').innerHTML = Number(secondNumber) - Number(firstNumber);
  }
  if (operator == 'prod') {
    document.getElementById('output').innerHTML = Number(secondNumber) * Number(firstNumber);
  }
  if (operator == 'divide') {
    document.getElementById('output').innerHTML = Number(secondNumber) / Number(firstNumber);
  }

}

function changeOperator(value) {
  if (!secondNumber) {
    secondNumber = firstNumber
    firstNumber = 0;
  }
  operator = value;
}

function init() {
  firstNumber = 0;
  secondNumber = null;
  operator = null;
  document.getElementById('output').innerHTML = firstNumber;
}


init();
