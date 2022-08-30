const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should return an object containing the letter counts of a given string', () => {
    const string = "The quick fox jumped into the hen house";
    const result = countLetters(string);
    const expected = {
      t: 3,
      h: 4,
      e: 5,
      q: 1,
      u: 3,
      i: 2,
      c: 1,
      k: 1,
      f: 1,
      o: 3,
      x: 1,
      j: 1,
      m: 1,
      p: 1,
      d: 1,
      n: 2,
      s: 1,
    };

    assert.deepEqual(result,expected)
  });
  it('should return an empty object when passed an empty string', () => {
    const string = "";
    const result = countLetters(string);
    const expected = {};
    assert.deepEqual(result,expected)
  });
  it('should handle a string with only one character', () => {
    const string = "aaaaaaaa";
    const result = countLetters(string);
    const expected = { a: 8 };
    assert.deepEqual(result,expected)
  });
});