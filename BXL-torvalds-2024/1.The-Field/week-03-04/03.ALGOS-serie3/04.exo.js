// Exercise.
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Expected results
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

function sevenBoom(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().includes('7')) {
            return `Boom! The number ${arr[i]} contains 7.`;
        }
    }return (" None of the items contain 7 within them. ")
}
    console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
    console.log(sevenBoom([8, 6, 33, 100]))
    console.log( sevenBoom([2, 55, 60, 97, 86]))
