const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

const findKeyByValue = (object,value) => {

  for (const obj in object) {
    if (object[obj] === value) {
      return obj;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  "sci_fi" : "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);