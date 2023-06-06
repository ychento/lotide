const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const tail = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array.splice(1);
}

console.log(eqArrays(tail([5,6,7]), [6,7]));
console.log(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));



// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const tail = function(array) {
//   if (array.length === 0) {
//     return undefined;
//   }
//   return array.splice(1);
// }

// console.log(eqArrays(tail([5, 6, 7]), [6, 7])); // should log true
// console.log(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])); // should log true