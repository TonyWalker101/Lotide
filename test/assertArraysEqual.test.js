const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([0],[0]); // prints Asserion Passed
assertArraysEqual([1,2,3,"4"],[1,2,3,4]); // prints Assertion Failed
assertArraysEqual(["apples", "bananas"], ["apples", "bananas"]); // prints Assertion Passed
assertArraysEqual([], ["apples"]); // prints Assertion Failed