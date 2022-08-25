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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TESTS

const test1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(test1, word => word[0]);
const expected1 = [ 'g', 'c', 't', 'm', 't' ];
assertArraysEqual(results1, expected1);

const test2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(test2, word => word.toUpperCase())
const expected2 = [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]
assertArraysEqual(results2, expected2);

const test3 = ["ground", "control", "to", "major", "tom"];
const callback3 = (word) => `${word} is ${word.length} characters long.`
const results3 = map(test3, callback3);
const expected3 = [
  'ground is 6 characters long.',
  'control is 7 characters long.',
  'to is 2 characters long.',
  'major is 5 characters long.',
  'tom is 3 characters long.'
]
assertArraysEqual(results3, expected3);

