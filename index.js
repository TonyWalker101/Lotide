const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const map = require("./map");
const counterLetters = require("./countLetters");
const countOnly = require("./countOnly");
const takeUntil = require("./takeUntil");
const without = require("./without");


module.exports = {
  head,
  tail,
  middle,
  flatten,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  counterLetters,
  countOnly,
  takeUntil,
  without
};