const assertEqual = require("./assertEqual");

let head = arr => {
  return arr[0];
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
