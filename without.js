// Helper function to check if 1 item is found in any element of an array

const includes = (arr, item) => { 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

// Takes in 2 arrays and returns only the items not common between the two arrays

const without = (source, itemsToRemove) => {
  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!includes(itemsToRemove, source[i])) {
      newArray.push(source[i]);
    } 
  }
  return newArray;
};

module.exports = without;