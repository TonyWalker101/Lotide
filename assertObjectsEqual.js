const eqObjects = require("./eqObjects");

// Takes in 2 objects and prints Passed if eqObjects returns True and prints Failed if eqObjects returns False

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; // the util library's inspect function

  if (eqObjects(actual, expected)) {
    return console.log(`Assertion Passed: ✅ ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`Assertion Failed: 🛑 ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;