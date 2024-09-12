// Exercise.
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Expected results
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1

function num_of_digits(number){

    return Math.abs(number).toString().split("").length
}

console.log(num_of_digits(1000))
console.log(num_of_digits(12))
console.log( num_of_digits(1305981031))
console.log( num_of_digits(0))