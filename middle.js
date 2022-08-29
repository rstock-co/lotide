const middle = (array) => {
  let mid = array.length - 1;
  let start = Math.floor(mid / 2);
  let end = Math.ceil(mid / 2);
  
  return array.slice(start, end + 1);
};

module.exports = middle;