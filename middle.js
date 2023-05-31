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


const numbers = [1, 2, 3, 4, 5, 6];
return (middle(numbers));