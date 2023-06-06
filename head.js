// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



// require assertEqual function from the other file/module
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length === 0){
    return undefined;
  }
  return array[0];
}


module.exports = head;
