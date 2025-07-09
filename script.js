"use strict";

let a = "";
let b = "";
let operator = "";
let display = document.querySelector(".display")
let currentDisplay = ""
//Numbers
let one = document.getElementById("one")
let two = document.getElementById("one")
let three = document.getElementById("one")
let four = document.getElementById("one")
let five = document.getElementById("one")
let six = document.getElementById("one")
let seven = document.getElementById("one")
let eight = document.getElementById("one")
let nine = document.getElementById("one")
let zero = document.getElementById("one")
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

function operate(operator, a, b) {
  operator(a, b)
}

function onDisplayNumber(number) {
  currentDisplay += number
  display.textContent = currentDisplay
  return currentDisplay
}

function updateDisplay() {
  display.textContent = currentDisplay
}

