const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// Should equal true
assertEqual(eqObjects(ab, ba), true); 

// Should equal false
assertEqual(eqObjects(ab, abc), false); 

// Should equal true
assertEqual(eqObjects(cd, dc), true); 

// Should equal false
assertEqual(eqObjects(cd, cd2), false);