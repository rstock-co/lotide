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

const flatten = (array) => {
  let result = [];
  array.forEach((outerElement) => {
    if (Array.isArray(outerElement)) {
      outerElement.forEach((innerElement) => {
        result.push(innerElement);
      });
    } else result.push(outerElement);
  });
  return result;
};

// TESTS

const test1 = [1, 2, [3, 4], 5, [6]];
const expected1 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(test1), expected1);

const test2 = [['monkey', 'dog'],'giraffe',['tiger','lion','jaguar'],['rhino','hyena'],'wildebeast'];
const expected2 = ['monkey', 'dog','giraffe','tiger','lion','jaguar','rhino','hyena','wildebeast'];
assertArraysEqual(flatten(test2), expected2);
