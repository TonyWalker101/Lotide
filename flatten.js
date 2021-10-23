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

let flatten = list => {
  let newArray = [];

  for (let i = 0; i < list.length; i++) {
    
    if (!Array.isArray(list[i])) {
      newArray.push(list[i]);
    }
    for (let x = 0; x < list[i].length; x++) {
      newArray.push(list[i][x]);
    }
  }
  return console.log(newArray);
};



flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]