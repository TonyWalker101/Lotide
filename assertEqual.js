//Takes in 2 values and prints either Passed or Failed if they are equal or not

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

module.exports = assertEqual;