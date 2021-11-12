// Main function takes in an array and returns the middle most element(s) of the array

// Helper function that gets middle index of an Array

const getMiddleIndex = arr => {

  return Math.floor(arr.length / 2);

};

// Main function

const middle = arr => {

  let answer = [];

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