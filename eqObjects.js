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

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; // avoid having to loop if the objects do not have the same # of keys

  for (const [key, value] of Object.entries(object1)) {
    if (Array.isArray(value) ? eqArrays(value, object2[key]) : value === object2[key]) continue;
    else return false;
  }
  return true;
};

// TESTS

// Primitive values only
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// Arrays
const cd = { c: "1", d: ["2", 3], e: 4 };
const dc = { e: 4, d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4], e: 4 };
assertEqual(eqObjects(cd, cd2), false);
