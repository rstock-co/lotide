const assertEqual = (actual, expected) => {
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const head = (array) => array[0];

// TEST CASES

console.log(head([3,4,5,6]));
console.log(head([9]));
console.log(head([]));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");