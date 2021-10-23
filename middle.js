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


let getMiddleUneven = num => {
  let indexUneven = 0;

  for (let i = 0; i < num.length; i ++) {
    indexUneven += i;
  }
  return (indexUneven / num.length);
};

let getMiddleEven = num => {
  let indexEven = 0;

  return indexEven = num.length / 2;

}

let middle = arr => {
  let answer = [];

  if (arr.length <= 2) { // Array <= 2 elements
    return answer = [];
  }
  else if (arr.length % 2 !== 0) { // Uneven array.length
    answer.push(arr[getMiddleUneven(arr)]);
    return answer;
  } // Even array.length
  answer.push(arr[(getMiddleEven(arr)-1)]);
  answer.push(arr[getMiddleEven(arr)]);
  return answer;
  
} 

assertArraysEqual(middle([1,2,3,4,5]), [3]);

//console.log(getMiddleUneven([1,2,3,4,5]));

//console.log(getMiddleEven([1,2,3,4,5,6]));