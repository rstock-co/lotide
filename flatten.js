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

module.exports = flatten;