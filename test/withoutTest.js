const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('should not mutate the source array', () => {
    const original = ["hello", "world", "lighthouse"];
    without(original, ["lighthouse"]); // no need to capture return value for this test case
    assert.deepEqual(original, ["hello", "world", "lighthouse"]);
  });
  it('should return an array containing the elements which are not contained in the remove array', () => {
    const array = [6, 8, 12, 17, 3];
    const remove = [8, 17];
    const expected = [6, 12, 3];
    assert.deepEqual(without(array, remove), expected);
  });
});