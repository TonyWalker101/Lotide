const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

const eqObjects = function(object1,object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const obj in object1) {
    if (object1[obj] === object2[obj]) {
      return true;
    }
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3" };

eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab,abc), false);