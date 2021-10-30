const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

let flatten = list => {
  let newArray = [];

  for (let i = 0; i < list.length; i++) {
    
    if (!Array.isArray(list[i])) { // action if list[i] isn't an Array
      newArray.push(list[i]);
    }
    for (let x = 0; x < list[i].length; x++) { // action if list[i] is an Array
      newArray.push(list[i][x]);
    }
  }
  return console.log(newArray);
};



flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]