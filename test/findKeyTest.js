const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('should return the value associated with a given key filter', () => {
    obj = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    assert.strictEqual(findKey((x) => x.stars === 1, "Blue Hill"))
    assert.strictEqual(findKey((x) => x.stars === 2, "noma"));
    assert.strictEqual(findKey((x) => x.stars === 3, "Akaleri"));
  });
});