// 6.
// Check if Two Arrays Contain the Same Values

// ex :

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 3, 4, 5, 7, 5];

// areEqual(arr1, arr2);
// // Result : true

// areEqual(arr1, arr3);
// // Result : false

let z = arr1.sort();
let y = arr2.sort();
const areEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(areEqual(arr1, arr2));
console.log(areEqual(arr1, arr3));
