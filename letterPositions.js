const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");


const letterPositions = function(sentence) {
  
  const results = {};
  let index = 0;
  
  for (const letter of sentence) {
    
    if (letter === " ") {
      index ++;
      continue;
    } (results[letter]) ? results[letter].push(index) : results[letter] = [index];
    index ++;
  }
  return results;
};

console.log(letterPositions("Lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));