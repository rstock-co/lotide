const assertEqual = (actual, expected) => {
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

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

const letterPositions = (string) => {
  let result = {};
  let normalized = string.split(" ").join("").toLowerCase();

  [...normalized].forEach((char, index) => {
    if (result[char]) result[char].push(index);
    else result[char] = [index];
  });

  return result;
};

// TESTS

// simple test
const string1 = "hello";
const result1 = letterPositions(string1);
const expected1 = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4],
};

assertArraysEqual(result1["h"], expected1["h"]);
assertArraysEqual(result1["e"], expected1["e"]);
assertArraysEqual(result1["l"], expected1["l"]);
assertArraysEqual(result1["o"], expected1["o"]);

// large test
console.log("-----------");
const string2 = "The quick fox jumped into the hen house";
const result2 = letterPositions(string2);
const expected2 = {
  t: [0, 19, 21],
  h: [1, 22, 24, 27],
  e: [2, 15, 23, 25, 31],
  q: [3],
  u: [4, 12, 29],
  i: [5, 17],
  c: [6],
  k: [7],
  f: [8],
  o: [9, 20, 28],
  x: [10],
  j: [11],
  m: [13],
  p: [14],
  d: [16],
  n: [18, 26],
  s: [30],
};

for (key in expected2) {
  assertArraysEqual(result2[key], expected2[key]);
}

// Empty string
console.log("-----------");
const string3 = "";
const result3 = letterPositions(string3);
const expected3 = {};
assertEqual(Object.keys(result3).length, Object.keys(result3).length);

// One character
console.log("-----------");
const string4 = "aaaaaaaa";
const result4 = letterPositions(string4);
const expected4 = { a: [0, 1, 2, 3, 4, 5, 6, 7] };
assertArraysEqual(result4["a"], expected4["a"]);
