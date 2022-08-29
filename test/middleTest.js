const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Does not mutate source array
const words = ["hello", "world", "lighthouse"];
middle(words); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Test with one return value
const test1 = [6, 8, 12, 17, 3];
const expected1 = [12];
assertArraysEqual(middle(test1), expected1);

// Test with two return values
const test2 = [6, 8, 12, 17, 3, 31];
const expected2 = [12, 17];
assertArraysEqual(middle(test2), expected2);

// Test with zero elements
const test3 = [];
const expected3 = [];
assertArraysEqual(middle(test3), expected3);

// Test with one element
const test4 = [3];
const expected4 = [3];
assertArraysEqual(middle(test4), expected4);
