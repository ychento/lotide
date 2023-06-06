const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

// TEST CODE
const numbers = [1, 2, 3, 4, 5, 6];
console.log((middle(numbers)));


console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]));
