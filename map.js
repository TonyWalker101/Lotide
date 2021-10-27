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

let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// test cases

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map([1,10,100], x => x * 3);

assertArraysEqual(results2 , [3,30,300]);

const results3 = map(["dog","cat","dog","bird"], x => x + "s");

assertArraysEqual(results3 , ["dogs","cats","dogs","birds"]);





