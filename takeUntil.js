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

const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (callback(item)) return results;
    results.push(item);
  }
  return results;
}

// TESTS

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expected1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, expected1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expected2);