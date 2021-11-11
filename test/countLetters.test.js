const assertEqual = require("../assertEqual");
const counterLetters = require("../countLetters");

console.log(counterLetters("Hello World"));
console.log(counterLetters("lighthouse in the house"));

// Should equal 1
assertEqual(counterLetters("H")["H"], 1);