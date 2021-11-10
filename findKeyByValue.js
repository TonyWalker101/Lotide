const findKeyByValue = (object,value) => {

  for (const obj in object) {
    if (object[obj] === value) {
      return obj;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;