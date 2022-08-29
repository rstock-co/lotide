const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log('TESTS');
console.log('--------');

// Test Case 0: Confirm original array is not mutating
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log('--------');

// Test Case 1: More than 2 elements 
const test1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2); // ensure we get back two elements
assertEqual(test1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(test1[1], "Labs"); // ensure second element is "Labs"
console.log('--------');

// Test Case 2: One element
const test2 = tail(["Hello"]);
assertEqual(test2.length, 0); // ensure we get back zero elements
assertEqual(test2[0], undefined); // ensure first element is undefined
console.log('--------');

// Test Case 3: Empty array
const test3 = tail([]);
assertEqual(test3.length, 0); // ensure we get back zero elements
assertEqual(test3[0], undefined); // ensure first element is undefined
console.log('--------');
