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
}

// TEST OUTPUT MESSAGES

assertArraysEqual([1,2,3], [1,2,3]); // true
assertArraysEqual(["tiger","lion"],["tiger","bear"]); // false
assertArraysEqual([77], [77]); // true
assertArraysEqual([true, false, true, false], [true,false,true,false]); // true
assertArraysEqual([true, false, true, false], [true,false,true]); // false