let eqArrays = (actual, expected) => {
  if (!actual || actual.length === 0 || actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1,object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) { // checks if # of keys match
    return false;
  }

  for (const obj in object1) {
    
    if (Array.isArray(object1[obj])) { // checks if key is an array

      if (!eqArrays(object1[obj],object2[obj])) { // checks if arrays in both keys match

        return false;
      } continue;
    }

    if (object1[obj] !== object2[obj]) { // checks if both keys match
      return false;
    }
  }
  return true;
};

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