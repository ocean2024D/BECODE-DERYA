// Exercise. Reverse Array in place
// Create a function that takes an array and reverses it.

// Notes
// Don't use reverse()
// Don't create a new array and push elements to it.
let z =""
// function reverse(arr){
//     console.log(arr[0])
// for(let i=0;i>arr.length;i--){



let array = [1, 2, 3, 4, 5];

console.log("Original Array: ");
console.log(array);

reverse_array = array.map((item, idx) => array[array.length - 1 - idx])

console.log("Reversed Array: ");
console.log(reverse_array);

