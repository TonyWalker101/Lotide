const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// Should Pass
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);

// Should Pass
assertArraysEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood']);