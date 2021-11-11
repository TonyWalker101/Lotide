// Takes in a sentence and returns a count of each letter in the sentence

const counterLetters = input => {
  
  const answer = {};

  for (const letter of input) {

    if (letter === " ") {
      continue;
    } (answer[letter]) ? answer[letter] ++ : answer[letter] = 1;
  }
  return answer;
};

module.exports = counterLetters;