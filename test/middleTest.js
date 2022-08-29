const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should not mutate the original array", () => {
    const original = ["hello", "world", "lighthouse"];
    middle(original);
    assert.deepEqual(original,["hello", "world", "lighthouse"]);
  });
  it("should return the middle value of an array with odd number of elements", () => {
    const result = middle([6, 8, 12, 17, 3]);
    assert.deepEqual(result, [12]);
  });
  it("should return the 2 middle values of an array with even number of elements", () => {
    const result = middle([6, 8, 12, 17, 3, 31]);
    assert.deepEqual(result, [12, 17]);
  });
  it("should return an empty array when passed an empty array", () => {
    const result = middle([]);
    assert.deepEqual(result, []);
  });
  it("should return the original array when passed an array with just one element", () => {
    const original = [3];
    const result = middle(original);
    assert.deepEqual(result, original);
  });
});