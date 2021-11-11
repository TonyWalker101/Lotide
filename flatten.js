// Takes in an array that contains nested arrays and returns a "flattened" version of the array (contains no nested arrays)

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
  return newArray;
};

module.exports = flatten;