const assert = require("chai").assert;
const map = require("../map");

describe('#map', () => {
  it('should map over an array containing strings and return the first letter of each string', () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const results = map(array, word => word[0]);
    const expected = [ 'g', 'c', 't', 'm', 't' ];
    assert.deepEqual(results, expected);
  });
  it('should map over an array containing strings and return the strings all in uppercase', () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const results = map(array, word => word.toUpperCase())
    const expected = [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]
    assert.deepEqual(results, expected);
  });
  it('should map over an array containing strings and return the length of each string', () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const callback = (word) => `${word} is ${word.length} characters long.`
    const results = map(array, callback);
    const expected = [
        'ground is 6 characters long.',
        'control is 7 characters long.',
        'to is 2 characters long.',
        'major is 5 characters long.',
        'tom is 3 characters long.'
      ]
    assert.deepEqual(results, expected);
  });
});
