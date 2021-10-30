const assertEqual = require("./assertEqual");

let eqArrays = (actual, expected) => {
  if (!actual || actual.length === 0 || actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

module.exports = eqArrays;

