const eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = function(arrays1, arrays2) {
  if (eqArrays(arrays1, arrays2)) {
    console.log(`✅✅✅ Assertion Passed: [${arrays1}] === [${arrays2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arrays1}] !== [${arrays2}]`);
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));


module.exports = assertArraysEqual;