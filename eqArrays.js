// Takes in 2 arrays and returns true if they're equal and false if they're not

const eqArrays = (actual, expected) => {
  if (!actual || actual.length === 0 || actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;