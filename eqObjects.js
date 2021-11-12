// Takes in 2 objects and returns True if they're equal and False if they're not

const eqArrays = require("./eqArrays");

const eqObjects = function(object1,object2) {

  // checks if # of keys match
  if (Object.keys(object1).length !== Object.keys(object2).length) { 
    return false;
  }

  for (const obj in object1) {
    
    if (Array.isArray(object1[obj])) { // checks if key is an array

      if (!eqArrays(object1[obj],object2[obj])) { // checks if arrays in both keys match

        return false;
      } continue;
    }

    if (object1[obj] !== object2[obj]) { // checks if both keys match
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;