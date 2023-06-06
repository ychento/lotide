const middle = require("../middle")
const assert = require('chai').assert;


// // TEST CODE
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log((middle(numbers)));


// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]));


describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
});