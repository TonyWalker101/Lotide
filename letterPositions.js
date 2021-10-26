let eqArrays = (actual, expected) => {
  if (!actual || actual.length === 0) {
    return false;
  }
  for (let i = 0; i < expected.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};


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