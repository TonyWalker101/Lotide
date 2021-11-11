// Takes in a string and returns indices of letter positions in the string

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

module.exports = letterPositions;