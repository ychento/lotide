const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.toUpperCase());
console.log(results2); 

const results3 = map(words, word => word.length);
console.log(results3);

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

