const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Should return true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

// Should return false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); 

// Should return true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// Should return false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);