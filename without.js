const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");


const includes = (arr, item) => { // checks if one 1 item is found any element of an array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

const without = (source, itemsToRemove) => {
  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (includes(itemsToRemove, source[i])) {
      continue;
    } newArray.push(source[i]);
  }
  return console.log(newArray);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);