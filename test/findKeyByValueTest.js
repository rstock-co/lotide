const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return the key associated with a given value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      action: "John Wick",
      reality: "Summer House",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "John Wick"), "action");
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Summer House"), "reality");
  });
  it('should return undefined if the key does not exist in the object', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      action: "John Wick",
      reality: "Summer House",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  });
  it('should return undefined if there is no key given', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      action: "John Wick",
      reality: "Summer House",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined)
  });
});
