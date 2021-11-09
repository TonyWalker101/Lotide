// gets Middle Index for Uneven Arrays
const getMiddleIndexUneven = arr => {

  return Math.floor(arr.length / 2);

};

// gets Middle Index for Even Arrays
const getMiddleIndexEven = arr => {

  return (arr.length / 2);
};

const middle = arr => {

  let answer = [];

  // Returns Empty Array if Array <= 2 elements
  if (arr.length <= 2) {

    return answer;
  }

  if (arr.length % 2 !== 0) {
    //Returns Array's Element at Middle Index
    answer.push(arr[getMiddleIndexUneven(arr)]);
    return answer;

  } else {
    //Returns Array's 2 Elements at the Middle Indexes
    answer.push(arr[getMiddleIndexEven(arr) - 1], arr[getMiddleIndexEven(arr)]);
    return answer;
  }

};

module.exports = middle;