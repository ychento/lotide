// TEST/ASSERTION FUNCTIONS
const eqArrays = require('../lotide/eqArrays');
 
const assertArraysEqual = require('../lotide/assertArraysEqual');


// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return []
  }
  else if (array.length % 2 === 1) {
    return [array[(array.length - 1) / 2]];
  }
  else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[array.length / 2]];
  }
}


// TEST CODE
const numbers = [1, 2, 3, 4, 5, 6];
return (middle(numbers));


module.exports = middle