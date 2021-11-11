// Takes in an object and a value and returns the first key equal to that value

const findKeyByValue = (object,value) => {

  for (const obj in object) {
    if (object[obj] === value) {
      return obj;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;