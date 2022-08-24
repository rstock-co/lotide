const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false; // avoid having to loop if the arrays are not the same length

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: Array 1 === Array 2`);
  } else console.log(`🛑🛑🛑 Assertion Failed: Array 1 !== Array 2`);
};

const middle = (array) => {
  let mid = array.length - 1;
  let start = Math.floor(mid / 2);
  let end = Math.ceil(mid / 2);
  
  return array.slice(start, end + 1);
};

// TEST CASES

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
