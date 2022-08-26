const assertEqual = (actual, expected) => {
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = (bestShows, showTitle) => {
  for (const [genre, show] of Object.entries(bestShows)) {
    if (showTitle === show) return genre;
  }
};

// TESTS

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "John Wick",
  reality: "Summer House",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "John Wick"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Summer House"), "reality");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
