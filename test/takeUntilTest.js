const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return an array of numbers up until a given condition is met', () => {
    const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(numbers, x => x < 0);
    const expected = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(results, expected);
  });
  it('should return an array of strings up until a given condition is met', () => {
    const strings = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = takeUntil(strings, x => x === ',');
    const expected = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    assert.deepEqual(results, expected);
  });
});