const tail = arr => {
  let answer = [];
  for (let i = 1; i < arr.length; i ++) {
    answer.push(arr[i]);
  }
  return answer;
};

module.exports = tail;
