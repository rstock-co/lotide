
const assert = require('chai').assert;
const eqObjectsCore = require('../eqObjects').eqObjectsCore;
const eqObjectsStretch = require('../eqObjects').eqObjectsStretch;

describe('#eqObjects - Core', () => {
  it('should handle objects containing only primitive values', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };

    assert.strictEqual(eqObjectsCore(ab, ba), true);
    assert.strictEqual(eqObjectsCore(ab, abc), false);
  });
  it('should handle objects containing arrays nested up to one level deep', () => {
    const cd = { c: "1", d: ["2", 3], e: 4 };
    const dc = { e: 4, d: ["2", 3], c: "1" };
    const cd2 = { c: "1", d: ["2", 3, 4], e: 4 };

    assert.strictEqual(eqObjectsCore(cd, dc), true);
    assert.strictEqual(eqObjectsCore(cd, cd2), false);
  });
});
describe('#eqObjects - Stretch (using recursion)', () => {
  it('should handle objects containing nested objects', () => {
    const azb = { a: { z: 1 }, b: 2 };
    const ayzb = { a: { y: 0, z: 1 }, b: 2 };
    const cd2 = { c: "1", d: ["2", 3, 4], e: 4 };

    assert.strictEqual(eqObjectsStretch(azb, azb), true);
    assert.strictEqual(eqObjectsStretch(ayzb, azb), false);
    assert.strictEqual(eqObjectsStretch(ayzb, { a: 1, b: 2 }), false);
  });
  it('should handle objects containing deeply nested objects', () => {
    const nested1 = {
      a: {
        y: 0,
        z: {
          e: 1,
          f: {
            g: 4,
          },
          h: {
            i: {
              j: 9,
              k: 15,
            },
            kk: 5,
          },
        },
        b: 2,
      },
      c: 10,
    };
    
    const nested2 = {
      a: {
        y: 0,
        z: {
          e: 1,
          f: {
            g: 4,
          },
          h: {
            i: {
              j: 9,
              k: '15',
            },
            kk: 5,
          },
        },
        b: 2,
      },
      c: 10,
    };
    
    assert.strictEqual(eqObjectsStretch(nested1, nested1), true);
    assert.strictEqual(eqObjectsStretch(nested1, nested2), false);
  });
});