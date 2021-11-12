const eqArrays = require("./eqArrays");

// Takes in 2 arrays and prints Passed if eqArrays returns True and Failed if eqArrays returns false

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  } else {
  console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;