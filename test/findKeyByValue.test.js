const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  "sci_fi" : "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

// Should equal drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

//Should equal undefined
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);