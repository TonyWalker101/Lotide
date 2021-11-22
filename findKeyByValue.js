// Takes in an object and a value and returns the first key equal to that value

const findKeyByValue = (object,value) => {

  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  
};

module.exports = findKeyByValue;