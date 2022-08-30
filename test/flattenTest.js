const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return a flattened array, one level nested (numbers)', () => {
    const array = [1, 2, [3, 4], 5, [6]];
    const result = flatten(array);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(result, expected);
  });
  it('should return a flattened array, one level nested (strings)', () => {
    const array = [['monkey', 'dog'],'giraffe',['tiger','lion','jaguar'],['rhino','hyena'],'wildebeast'];
    const result = flatten(array);
    const expected = ['monkey', 'dog','giraffe','tiger','lion','jaguar','rhino','hyena','wildebeast'];
    assert.deepEqual(result, expected);
  });
});
