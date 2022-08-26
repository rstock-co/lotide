// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("tiger", "tiger");
assertEqual(77, 42);
assertEqual(1, 1);
