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

assertArraysEqual("Hello", {H:0,e:1,l:[2,3],o:4});


// const letterPositions = function(sentence) {

// const results = {};

// for (let i = 0; i < sentence.length; i++) {
  
//   if (results[sentence]) {
//     results[sentence].i ++;
//   } else {
//     results[sentence].i = 1;
//     }
//   }
//   return results;
// };


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