const assertEqual = (actual, expected) => {
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// Core version (no recursion)
const eqArraysCore = (array1, array2) => {
  if (array1.length !== array2.length) return false; // avoid having to loop if the arrays are not the same length

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// Stretch version (handles nested arrays using recursion)
const eqArraysStretch = (array1, array2) => {
  if (array1.length !== array2.length) return false; // avoid having to loop if the arrays are not the same length

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) ? eqArraysStretch(array1[i],array2[i]) : array1[i] === array2[i]) continue;
    return false;
  }
  return true;
};

// TESTS

// --- CORE ---
console.log('---CORE---');

assertEqual(eqArraysCore([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArraysCore([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArraysCore(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArraysCore(["1", "2", "3"], ["1", "2", 3]), false); 

// --- STRETCH ---
console.log('---STRETCH---');

// Nested Arrays (using recursion)
const arr1 = [[2, 3], [4]];
const arr2 = [[2, 3], [4, 5]];
const arr3 = [[2, 3], 4];
assertEqual(eqArraysStretch(arr1, arr1),true); 
assertEqual(eqArraysStretch(arr1, arr2),false); 
assertEqual(eqArraysStretch(arr1, arr3),false); 