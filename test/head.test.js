const head = require("../head");
const assert = require("chai").assert;

// Test cases

describe ("#head", () => {
  it ("returns 1 for [1,2,3]", () => {

    const actual = head([1,2,3]);
    const expected = 1;

    assert.strictEqual(actual, expected);
  });

  it ("returns 5 for ['5']", () => {

    const actual = head([5]);
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it ("returns 'Lighthouse Labs' for ['Lighthouse Labs']", () => {

    const actual = head(["Lighthouse Labs"]);
    const expected = "Lighthouse Labs";

    assert.strictEqual(actual, expected);
  });

  it ("returns 1 for [1,1]", () => {

    const actual = head([1,1]);
    const expected = 1;

    assert.strictEqual(actual, expected);
  });

  it ("returns 5 for [5,6,7]", () => {

    const actual = head([5,6,7]);
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it ("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {

    const actual = head(['Hello', 'Lighthouse', 'Labs']);
    const expected = "Hello";

    assert.strictEqual(actual, expected);
  });

});