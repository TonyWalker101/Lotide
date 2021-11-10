const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

console.log(letterPositions("Lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));