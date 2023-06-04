const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

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


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);