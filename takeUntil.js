const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (callback(item)) return results;
    results.push(item);
  }
  return results;
}

module.exports = takeUntil;