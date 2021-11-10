const takeUntil = function(array, callback) {
  
  const newArray = [];

  for (let item in array) {
    if (!callback(array[item])) {
      newArray.push(array[item]);
    } else {
      return newArray;
    }
  }
  return newArray;
};

module.exports = takeUntil;