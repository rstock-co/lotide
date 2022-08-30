const eqArrays = require("./eqArrays").eqArraysStretch;

const without = (sourceArray, itemsToRemove) => {
  let result = [];
  if (eqArrays(sourceArray, itemsToRemove)) return result; // avoid having to loop if the arrays are equal
  
  sourceArray.forEach(element => {
    if (!itemsToRemove.includes(element)) result.push(element);
  })
  return result;
}

module.exports = without;