// Takes in an object and a callback and returns the first key that matches what callback is looking for

const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;