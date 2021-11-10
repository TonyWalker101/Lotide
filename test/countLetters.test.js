const assertEqual = require("../assertEqual");
const counterLetters = require("../countLetters");

console.log(counterLetters("Hello World"));
console.log(counterLetters("lighthouse in the house"));

assertEqual(counterLetters("H")["H"], 1);