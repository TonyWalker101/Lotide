// Takes in an array and a callback and returns a slice of the array based off the callback

const takeUntil = function(array, callback) {
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    } 
  }
  return array;
};

module.exports = takeUntil;