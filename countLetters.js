const countLetters = (string) => {
  let result = {};
  let normalized = string.split(" ").join("").toLowerCase();
  for (char of normalized) {
    if (result[char]) result[char] += 1;
    else result[char] = 1;
  }
  return result;
};

module.exports = countLetters;