const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (string) => {
  let result = {};
  let normalized = string.split(" ").join("").toLowerCase();
  for (char of normalized) {
    if (result[char]) result[char] += 1;
    else result[char] = 1;
  }
  return result;
};

// TESTS

// Regular case
const string1 = "The quick fox jumped into the hen house";
const result1 = countLetters(string1);
const expected1 = {
  t: 3,
  h: 4,
  e: 5,
  q: 1,
  u: 3,
  i: 2,
  c: 1,
  k: 1,
  f: 1,
  o: 3,
  x: 1,
  j: 1,
  m: 1,
  p: 1,
  d: 1,
  n: 2,
  s: 1,
};

for (key in expected1) {
  assertEqual(result1[key], expected1[key]);
}

// Empty string
console.log("-----------");
const string2 = "";
const result2 = countLetters(string2);
const expected2 = {};
assertEqual(Object.keys(result2).length, Object.keys(result2).length);

// One character
console.log("-----------");
const string3 = "aaaaaaaa";
const result3 = countLetters(string3);
const expected3 = { a: 8 };
assertEqual(result3["a"], expected3["a"]);
