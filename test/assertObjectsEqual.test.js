const assertObjectsEqual = require("../assertObjectsEqual");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// Should print Assertion Passed
assertObjectsEqual((cd, dc), { d: [ '2', 3 ], c: '1' }); 

// Should print Assertion Passed
assertObjectsEqual((cd, cd2), { c: '1', d: [ '2', 3, 4 ] }); 