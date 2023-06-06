// const eqArrays = require('../eqArrays');
// const tail = require('../tail');


// console.log(eqArrays(tail([5,6,7]), [6,7]));
// console.log(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#htail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

  
});