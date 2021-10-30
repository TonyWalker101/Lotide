const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; // the util library's inspect function

  if (eqObjects(actual, expected)) {
    return console.log(`Assertion Passed: ✅ ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`Assertion Failed: 🛑 ${inspect(actual)} !== ${inspect(expected)}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual((cd, dc), { d: [ '2', 3 ], c: '1' }); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual((cd, cd2), { c: '1', d: [ '2', 3, 4 ] }); // => false