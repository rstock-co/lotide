const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return an object containing arrays of the indexes for each character (single word)", () => {
    const string = 'hello';
    const result = letterPositions(string);
    const expected = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    };
    assert.deepEqual(result, expected);
  });
  it("should return an object containing arrays of the indexes for each character (phrase)", () => {
    const string = "The quick fox jumped into the hen house";
    const result = letterPositions(string);
    const expected = {
        t: [0, 19, 21],
        h: [1, 22, 24, 27],
        e: [2, 15, 23, 25, 31],
        q: [3],
        u: [4, 12, 29],
        i: [5, 17],
        c: [6],
        k: [7],
        f: [8],
        o: [9, 20, 28],
        x: [10],
        j: [11],
        m: [13],
        p: [14],
        d: [16],
        n: [18, 26],
        s: [30],
      };
    assert.deepEqual(result, expected);
  });
  it("should return an empty object when passed an empty string", () => {
    const string = '';
    const result = letterPositions(string);
    const expected = {};
    assert.deepEqual(result, expected);
  });
  it("should handle a string with just one letter", () => {
    const string = "aaaaaaaa";
    const result = letterPositions(string);
    const expected = { a: [0, 1, 2, 3, 4, 5, 6, 7] };
    assert.deepEqual(result, expected);
  });
});
