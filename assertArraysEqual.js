const eqArrays = function(array1, array2){
  for (let i=0; i < array1.length; i++) {
    if (array1[i]!== array2[i]){
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(arrays1, arrays2) {
  if (eqArrays(arrays1, arrays2)) {
    console.log(`✅✅✅ Assertion Passed: [${arrays1}] === [${arrays2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arrays1}] !== [${arrays2}]`);
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
