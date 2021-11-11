// Helper function that gets Middle Index for Uneven Arrays

const getMiddleIndexUneven = arr => {

  return Math.floor(arr.length / 2);

};

// Helper function that gets Middle Index for Even Arrays

const getMiddleIndexEven = arr => {

  return (arr.length / 2);
};

//Takes in an array and returns the middle most element(s) of the array

const middle = arr => {

  let answer = [];

  // Returns Empty Array if Array <= 2 elements
  if (arr.length <= 2) {

    return answer;
  }

  if (arr.length % 2 !== 0) {
    
    answer.push(arr[getMiddleIndexUneven(arr)]);
    return answer;

  } else {
    
    answer.push(arr[getMiddleIndexEven(arr) - 1], arr[getMiddleIndexEven(arr)]);
    return answer;
  }

};

module.exports = middle;