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

module.exports = {
  eqArraysCore,
  eqArraysStretch
}