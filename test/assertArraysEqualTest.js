const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual(["tiger", "lion"],["tiger", "bear"]); // false
assertArraysEqual([77], [77]); // true
assertArraysEqual([true, false, true, false], [true, false, true, false]); // true
assertArraysEqual([true, false, true, false], [true, false, true]); // false