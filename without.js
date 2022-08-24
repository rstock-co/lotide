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

const without = (sourceArray, itemsToRemove) => {
  let result = [];
  if (eqArrays(sourceArray, itemsToRemove)) return result; // avoid having to loop if the arrays are equal
  
  sourceArray.forEach(element => {
    if (!itemsToRemove.includes(element)) result.push(element);
  })
  return result;
}

// TEST CASES

// Does not mutate source array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Standard test
const source = [6, 8, 12, 17, 3];
const remove = [8, 17];
const expected = [6, 12, 3];
assertArraysEqual(without(source,remove), expected);