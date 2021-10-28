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

const takeUntil = function(array, callback) {
  
  const newArray = [];

  for (let item in array) {
    if (!callback(array[item])) {
      newArray.push(array[item]);
    } else {
      return newArray;
    }
  }
  return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



