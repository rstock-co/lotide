const letterPositions = (string) => {
  let result = {};
  let normalized = string.split(" ").join("").toLowerCase();

  [...normalized].forEach((char, index) => {
    if (result[char]) result[char].push(index);
    else result[char] = [index];
  });
  return result;
};

module.exports = letterPositions;