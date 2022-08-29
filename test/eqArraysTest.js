const assertEqual = require('../assertEqual');
const eqArraysCore = require('../eqArrays').eqArraysCore;
const eqArraysStretch = require('../eqArrays').eqArraysStretch;

// --- CORE ---
console.log('---CORE---');

assertEqual(eqArraysCore([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArraysCore([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArraysCore(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArraysCore(["1", "2", "3"], ["1", "2", 3]), false); 

// --- STRETCH ---
console.log('---STRETCH---');

// Nested Arrays (using recursion)
const arr1 = [[2, 3], [4]];
const arr2 = [[2, 3], [4, 5]];
const arr3 = [[2, 3], 4];
const arr4 = [[2, [3]], [4, [5, [6, [7, [8]], 9, [10]], [11]], [12,13]]];
assertEqual(eqArraysStretch(arr1, arr1),true); 
assertEqual(eqArraysStretch(arr1, arr2),false); 
assertEqual(eqArraysStretch(arr1, arr3),false); 
assertEqual(eqArraysStretch(arr4, arr4),true); 