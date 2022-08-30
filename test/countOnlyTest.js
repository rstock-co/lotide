const assert = require('chai').assert;
const { italic } = require('ansi-colors');
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("should return only the names specified in the itemsToCount object, with their count", () => {
    const names = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const filter = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    }
    const result = countOnly(names, filter)
    const expected = {
      Jason: 1,
      Fang: 2,
    }
    assert.deepEqual(result, expected);
    });
    it("should return an empty object, when passed an empty itemsToCount object", () => {
      const names = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
      const filter = {};
      const result = countOnly(names, filter);
      const expected = {};
      assert.deepEqual(result, expected);
      });
  });