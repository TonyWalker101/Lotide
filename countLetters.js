const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: 🛑 ${actual} !== ${expected}`);
};

const counterLetters = input => {
  
  const answer = {};

  for (const letter of input) {

    if (letter === " ") {
      continue;
    } (answer[letter]) ? answer[letter] ++ : answer[letter] = 1;
  }
  return answer;
};

console.log(counterLetters("Hello World"));
console.log(counterLetters("lighthouse in the house"));

assertEqual(counterLetters("H")["H"], 1);

