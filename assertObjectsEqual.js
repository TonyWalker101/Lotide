// Takes in 2 objects and prints Passed if eqObjects returns True and prints Failed if eqObjects returns False

const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; // the util library's inspect function

  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ✅ ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: 🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;