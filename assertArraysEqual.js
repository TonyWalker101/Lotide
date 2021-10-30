const eqArrays = require("./eqArrays");

let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

// assertArraysEqual([0],[0]); // prints Asserion Passed
// assertArraysEqual([1,2,3,"4"],[1,2,3,4]); // prints Assertion Failed
// assertArraysEqual(["apples", "bananas"], ["apples", "bananas"]); // prints Assertion Passed
// assertArraysEqual([], ["apples"]); // prints Assertion Failed

module.exports = assertArraysEqual;


