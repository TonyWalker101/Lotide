const assertEqual = require("../assertEqual");
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

// Should equal 1
assertEqual(result1["Jason"], 1);

// Should equal undefined
assertEqual(result1["Karima"], undefined);

// Should equal 2
assertEqual(result1["Fang"],2);

// Should equal undefined
assertEqual(result1["Agouhanna"], undefined);