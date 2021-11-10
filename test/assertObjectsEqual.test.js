const assertObjectsEqual = require("../assertObjectsEqual");
const eqObjects = require("../eqObjects");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual((cd, dc), { d: [ '2', 3 ], c: '1' }); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual((cd, cd2), { c: '1', d: [ '2', 3, 4 ] }); // => false