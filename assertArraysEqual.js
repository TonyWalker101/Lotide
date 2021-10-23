let eqArrays = (actual, expected) => {
  if (!actual || actual.length === 0) {
    return false;
  }
  for (let i = 0; i < expected.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

assertArraysEqual([0],[0]); // prints Asserion Passed
assertArraysEqual([1,2,3,"4"],[1,2,3,4]); // prints Assertion Failed
assertArraysEqual(["apples", "bananas"], ["apples", "bananas"]); // prints Assertion Passed
assertArraysEqual([], ["apples"]); // prints Assertion Failed