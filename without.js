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



let without = (source, itemsToRemove) => {
  let newArray = source.map(x => x); // creates a clone of source
  
  for (let i = 0; i < newArray.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (newArray[i] === itemsToRemove[x]) {
        newArray.splice(i, 1); // removes the element at source that matches itemsToRemove
        i --; // to account for the new length of source 
      }
    }
  }
  return console.log(newArray);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);