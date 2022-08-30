const findKeyByValue = (object, value) => {
  for (const [key, val] of Object.entries(object)) {
    if (value === val) return key;
  }
};

module.exports = findKeyByValue;