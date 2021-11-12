// Helper function that gets Middle Index of an Array

const getMiddleIndex = arr => {

  return Math.floor(arr.length / 2);

};

const middle = arr => {

  let answer = [];

  // Returns Empty Array if Array <= 2 elements
  if (arr.length <= 2) {

    return answer;
  }

  if (arr.length % 2 !== 0) {
    
    answer.push(arr[getMiddleIndex(arr)]);
    return answer;

  } else {
    
    answer.push(arr[getMiddleIndex(arr) - 1], arr[getMiddleIndex(arr)]);
    return answer;
  }

};

module.exports = middle;