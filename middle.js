const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");


let getMiddleUneven = num => {
  let indexUneven = 0;

  for (let i = 0; i < num.length; i ++) {
    indexUneven += i;
  }
  return (indexUneven / num.length);
};

let getMiddleEven = num => {
  return num.length / 2;
};

let middle = arr => {
  let answer = [];

  if (arr.length <= 2) { // Array <= 2 elements
    return answer = [];
  } else if (arr.length % 2 !== 0) { // Uneven array.length
    answer.push(arr[getMiddleUneven(arr)]);
    return answer;
  } answer.push(arr[(getMiddleEven(arr) - 1)]); // Even array.length
  answer.push(arr[getMiddleEven(arr)]);
  return answer;
  
};

assertArraysEqual(middle([1,2,3,4]), [2,3]);

//console.log(getMiddleUneven([1,2,3,4,5]));

//console.log(getMiddleEven([1,2,3,4,5,6]));