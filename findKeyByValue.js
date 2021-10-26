const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
*/

const findKeyByValue = (object,value) => {

  const answer = [];

  for (const obj in object) {
    if (object[obj] === value) {
      return console.log(obj);
    } 
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
