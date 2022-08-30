const findKey = (object, callback) => {
  for (key in object) {
    if (callback(object[key])) return key;
  }
};

module.exports = findKey;
