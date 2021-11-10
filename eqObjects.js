const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");


const eqObjects = function(object1,object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) { // checks if # of keys match
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