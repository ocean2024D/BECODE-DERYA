// Exercise.
// Create a function that takes an array of numbers and return 
// both the minimum and maximum numbers, in that order.

// Notes
// All test arrays will have at least one element and are valid.
// Expected results
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

function minMax(array) {
  let sortedArray =array.sort((a, b) => a - b); //(for sort numerically )
  let z = [];
  z.push(sortedArray[0]);
  z.push(sortedArray[sortedArray.length - 1]);
  return z;
}

console.log(minMax([2334454,5]));
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1]));
