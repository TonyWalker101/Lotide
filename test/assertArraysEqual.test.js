const assertArraysEqual = require("../assertArraysEqual");

// prints Asserion Passed
assertArraysEqual([0],[0]); 

// prints Assertion Failed
assertArraysEqual([1,2,3,"4"],[1,2,3,4]); 

// prints Assertion Passed
assertArraysEqual(["apples", "bananas"], ["apples", "bananas"]); 

// prints Assertion Failed
assertArraysEqual([], ["apples"]); 