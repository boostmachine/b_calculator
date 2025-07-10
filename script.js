"use strict";

let a = "";
let b = "";
let operator = "";
let display = document.querySelector(".display")
let currentDisplay = ""
//Numbers
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
// Operators
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let asterisk = document.getElementById("asterisk")
let slash = document.getElementById("slash")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")


function add(a, b) {
  return a + b
};

function subtract(a, b) {
  return a - b
};

function multiply(a, b) {
  return a*b
};

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero.");
    return 0;
  }
  return a / b
};

function getValues(){
  let str = currentDisplay
  a = +str.slice(0, str.indexOf(operator))
  b = +str.slice(str.indexOf(operator) + 1)
}

function operate(operator, a, b) {
  switch(operator) {
    case "+":
      currentDisplay = add(a, b);
      break;
    case "-":
      currentDisplay = subtract(a, b);
      break;
    case "*":
      currentDisplay = multiply(a, b);
      break;
    case "/":
      currentDisplay = divide(a, b);
      break;
  }
  updateDisplay()
}

function onDisplayNumber(number) {
  currentDisplay += number
  display.textContent = currentDisplay
  console.log(currentDisplay);
  return currentDisplay
}

function onDisplayOperator(operatorio) {
  operator = operatorio
  currentDisplay += operatorio
  display.textContent = currentDisplay
  console.log(currentDisplay);
  return currentDisplay
}

function clearDisplay() {
  display.textContent = 0
  currentDisplay = ""
  a = ""
  b = ""
  operator = ""
}

function updateDisplay() {
  display.textContent = currentDisplay
}

one.addEventListener("click", () => onDisplayNumber("1"));
two.addEventListener("click", () => onDisplayNumber("2"));
three.addEventListener("click", () => onDisplayNumber("3"));
four.addEventListener("click", () => onDisplayNumber("4"));
five.addEventListener("click", () => onDisplayNumber("5"));
six.addEventListener("click", () => onDisplayNumber("6"));
seven.addEventListener("click", () => onDisplayNumber("7"));
eight.addEventListener("click", () => onDisplayNumber("8"));
nine.addEventListener("click", () => onDisplayNumber("9"));
zero.addEventListener("click", () => onDisplayNumber("0"));

plus.addEventListener("click", () => onDisplayOperator("+"));
minus.addEventListener("click", () => onDisplayOperator("-"));
asterisk.addEventListener("click", () => onDisplayOperator("*"));
slash.addEventListener("click", () => onDisplayOperator("/"));
equal.addEventListener("click", () => {
  getValues()
  operate(operator, a, b)
});
clear.addEventListener("click", () => clearDisplay());




