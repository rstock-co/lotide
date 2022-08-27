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

// Core version (no recursion)
const eqObjectsCore = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; // avoid having to loop if the objects do not have the same # of keys

  for (const [key, value] of Object.entries(object1)) {
    if (
      Array.isArray(value)
        ? eqArrays(value, object2[key])
        : value === object2[key]
    )
      continue;
    else return false;
  }
  return true;
};

// Stretch version (handles nested objects using recursion)

// helper function (type checker)
const valType = (value) => {
  if (Array.isArray(value)) return "array";
  if (typeof value === "object" && typeof value != null) return "object";
  return "primitive";
};

const eqObjectsStretch = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; // avoid having to loop if the objects do not have the same # of keys

  for (const [key, value] of Object.entries(object1)) {
    const type = valType(value);
    if (type === "object") eqObjectsStretch(value, object2[key]);
    if (
      type === "array" ? eqArrays(value, object2[key]) : value === object2[key]
    )
      continue;
    else return false;
  }
  return true;
};

// TESTS

// --- CORE ---

// Primitive values only
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjectsCore(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjectsCore(ab, abc), false);

// Arrays
const cd = { c: "1", d: ["2", 3], e: 4 };
const dc = { e: 4, d: ["2", 3], c: "1" };
assertEqual(eqObjectsCore(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4], e: 4 };
assertEqual(eqObjectsCore(cd, cd2), false);

// --- STRETCH ---

// Nested Objects (using recursion)
const azb = { a: { z: 1 }, b: 2 };
const ayzb = { a: { y: 0, z: 1 }, b: 2 };
assertEqual(eqObjectsStretch(azb, azb), true);
assertEqual(eqObjectsStretch(ayzb, azb), false);
assertEqual(eqObjectsStretch(ayzb, { a: 1, b: 2 }), false);

const nested1 = {
  a: {
    y: 0,
    z: {
      e: 1,
      f: {
        g: 4,
      },
      h: {
        i: {
          j: 9,
          k: 15,
        },
        kk: 5,
      },
    },
    b: 2,
  },
  c: 10,
};

const nested2 = {
  a: {
    y: 0,
    z: {
      e: 1,
      f: {
        g: 4,
      },
      h: {
        i: {
          j: 9,
          k: '15',
        },
        kk: 5,
      },
    },
    b: 2,
  },
  c: 10,
};

assertEqual(eqObjectsStretch(nested1, nested1), true);
assertEqual(eqObjectsStretch(nested1, nested2), false);
