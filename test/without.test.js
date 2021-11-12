const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

// Should equal [2, 3]
without([1, 2, 3], [1]); 

// Should equal ["1", "2"]
without(["1", "2", "3"], [1, 2, "3"]); 


// Should equal ["hello","world"]
const words = ["hello", "world", "lighthouse"];
console.log((without(words, ["lighthouse"]))); 

// Makes sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);