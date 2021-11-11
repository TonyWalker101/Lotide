// Takes in an object and a callback and returns the first key that matches what callback is looking for

const findKey = function(object, callback) {

  for (let obj in object) {
    if (callback(object[obj])) {
      return obj;
    }
  }
  return undefined;
};

module.exports = findKey;