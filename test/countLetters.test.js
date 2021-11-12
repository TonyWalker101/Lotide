const assertEqual = require("../assertEqual");
const counterLetters = require("../countLetters");

// Prints by-product of function
console.log(counterLetters("Hello World"));
console.log(counterLetters("lighthouse in the house"));

// Should print Assertion Passed
assertEqual(counterLetters("H")["H"], 1);