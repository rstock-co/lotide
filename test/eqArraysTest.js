const assert = require("chai").assert;
const eqArraysCore = require("../eqArrays").eqArraysCore;
const eqArraysStretch = require("../eqArrays").eqArraysStretch;

describe("#eqArrays - Core", () => {
  it("should handle simple non-nested arrays", () => {
    assert.strictEqual(eqArraysCore([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArraysCore([1, 2, 3], [3, 2, 1]), false);
    assert.strictEqual(eqArraysCore(["1", "2", "3"], ["1", "2", "3"]), true);
    assert.strictEqual(eqArraysCore(["1", "2", "3"], ["1", "2", 3]), false);
  });
});

describe("#eqArrays - Stretch (using recursion)", () => {
  it("should handle deeply nested arrays", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [
      [2, 3],
      [4, 5],
    ];
    const arr3 = [[2, 3], 4];
    const arr4 = [
      [2, [3]],
      [4, [5, [6, [7, [8]], 9, [10]], [11]], [12, 13]],
    ];
    assert.strictEqual(eqArraysStretch(arr1, arr1), true);
    assert.strictEqual(eqArraysStretch(arr1, arr2), false);
    assert.strictEqual(eqArraysStretch(arr1, arr3), false);
    assert.strictEqual(eqArraysStretch(arr4, arr4), true);
  });
});
