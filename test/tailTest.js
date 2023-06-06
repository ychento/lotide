const eqArrays = require('../eqArrays');
const tail = require('../tail');


console.log(eqArrays(tail([5,6,7]), [6,7]));
console.log(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));