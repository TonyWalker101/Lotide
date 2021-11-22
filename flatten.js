// Takes in an array that contains nested arrays and returns a "flattened" version of the array (contains no nested arrays)

const flatten = arr => {

  let newArray = [];

  //Helper function to benefit from recursion without duplicating newArray
  const collector = array => {

    for (let item of array) {
  
      if (Array.isArray(item)) {

        collector(item);

      } else {
        newArray.push(item);
      }
    }
  };

  collector(arr);

  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;