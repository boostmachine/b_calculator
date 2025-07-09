"use strict";

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
  return a / b
};

function operate(operator, a, b) {
  operator(a, b)
}

let a = "";
let b = "";
let operator = "";
let display = document.querySelector(".display")


