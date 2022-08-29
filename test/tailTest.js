const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should not mutate the original array", () => {
    const original = ["Yo Yo", "Lighthouse", "Labs"];
    tail(original);
    assert.deepEqual(original,["Yo Yo", "Lighthouse", "Labs"]);
  });
  it("should return the tail of an array with more than one element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result,["Lighthouse", "Labs"]);
  });
  it("should return an empty array when passed array with just 1 element", () => {
    const result = tail(["Hello"]);
    assert.strictEqual(result.length, 0);
    assert.strictEqual(result[0],undefined);
  });
  it("should return an empty array when passed an empty array", () => {
    const result = tail([]);
    assert.strictEqual(result.length, 0);
    assert.strictEqual(result[0],undefined);
  });  
});

