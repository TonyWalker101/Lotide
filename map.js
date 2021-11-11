// Takes in an array and a callback and returns a new array based of the results of the callback

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;