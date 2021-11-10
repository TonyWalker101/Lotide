const includes = (arr, item) => { // checks if 1 item is found any element of an array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

const without = (source, itemsToRemove) => {
  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (includes(itemsToRemove, source[i])) {
      continue;
    } newArray.push(source[i]);
  }
  return console.log(newArray);
};

module.exports = without;