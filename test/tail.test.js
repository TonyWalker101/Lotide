const tail = require("../tail");
const assert = require("chai").assert;

// Test cases

describe ("#tail", () => {
  it ("returns [2,3] for [1,2,3]", () => {

    const actual = tail([1,2,3]);
    const expected = [2,3];

    assert.deepEqual(actual, expected);
  });

  it ("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {

    const actual = tail(['Hello', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];

    assert.deepEqual(actual, expected);
  });

  it ("returns 2 for the length of ['Hello', 'Lighthouse', 'Labs']", () => {

    const actual = tail(['Hello', 'Lighthouse', 'Labs']).length;
    const expected = 2;

    assert.strictEqual(actual, expected);
  });

  it ("returns 'Lighthouse' as the first element of ['Hello', 'Lighthouse', 'Labs']", () => {

    const actual = tail(['Hello', 'Lighthouse', 'Labs'])[0];
    const expected = 'Lighthouse';

    assert.strictEqual(actual, expected);
  });

  it ("returns 'Labs' as the second element of ['Hello', 'Lighthouse', 'Labs']", () => {

    const actual = tail(['Hello', 'Lighthouse', 'Labs'])[1];
    const expected = 'Labs';

    assert.strictEqual(actual, expected);
  });

});