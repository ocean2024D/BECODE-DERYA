// Exercise. Two sums
// Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

// Your function should return every pair of numbers from numArray that adds up to the 'sum'

// Notes
// The result should be an array of arrays.
// Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)
// Expected results
// // For "sum" = 7
// [1, 6, 4, 5, 3, 3] ---> [[6,1], [3,4], [3,4]]

let sum = 7;
let arr = [1, 6, 4, 5, 3, 3];

function findPairs(arr, sum) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

let result = findPairs(arr, sum);

console.log(result);

