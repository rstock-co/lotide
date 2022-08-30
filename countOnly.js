const countOnly = (allItems, itemsToCount) => {
  const results = {};

  allItems.forEach((item) => {
    if (itemsToCount[item]) {
      if (!results[item]) results[item] = 0;
      results[item]++;
    }
  });
  return results;
};

module.exports = countOnly;
