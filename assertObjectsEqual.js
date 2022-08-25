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

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
}

// TEST OUTPUT MESSAGES

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // true
assertObjectsEqual({ c: "1", d: ["2", 3], e: 4 }, { e: 4, c: '1', d: ["2", 3] }); // true
assertObjectsEqual({ c: "1", d: ["2", 3], e: 4 }, { e: 4, c: 1, d: ["2", 3] }); // false
assertObjectsEqual({},{});