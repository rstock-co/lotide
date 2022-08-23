const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false; // avoid having to loop if the arrays are not the same length

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// TESTS

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); 

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); 
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); 
