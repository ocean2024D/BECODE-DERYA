// 5.
// Get the Smallest Element of an Array

// ex :

// const arr = [13, 7, 11, 3, 9, 15, 17];

// getSmallest(arr);
// // Result: 3
const arr = [13, 7, 11, 3, 9, 15, 17];
const getSmallest=(arr)=>{return Math.min(...arr)}
console.log(getSmallest(arr))