const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map([1,10,100], x => x * 3);

assertArraysEqual(results2 , [3,30,300]);

const results3 = map(["dog","cat","dog","bird"], x => x + "s");

assertArraysEqual(results3 , ["dogs","cats","dogs","birds"]);

