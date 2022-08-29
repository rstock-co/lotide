const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("Confirms that the original array is not being mutated", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("works for an array with more than 2 elements", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.deepEqual(result,["Lighthouse", "Labs"]);
  });
  it("returns an empty array when passed array with just 1 element", () => {
    const result = tail(["Hello"]);
    assert.strictEqual(result.length, 0);
    assert.strictEqual(result[0],undefined);
  });
  it("returns an empty array when passed an empty array", () => {
    const result = tail([]);
    assert.strictEqual(result.length, 0);
    assert.strictEqual(result[0],undefined);
  });  
});

