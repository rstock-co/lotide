const eqArrays = require('./eqArrays').eqArraysStretch;

// Core version (no recursion)
const eqObjectsCore = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; // avoid having to loop if the objects do not have the same # of keys

  for (const [key, value] of Object.entries(object1)) {
    if (Array.isArray(value) ? eqArrays(value, object2[key]) : value === object2[key]) continue;
    return false;
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
    if (type === "array" ? eqArrays(value, object2[key]) : value === object2[key]) continue;
    return false;
  }
  return true;
};

module.exports = {
  eqObjectsCore,
  eqObjectsStretch,
}