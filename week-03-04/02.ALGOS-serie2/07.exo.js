// Exercise.
// Create a function that takes two numbers and 
// a mathematical operator + - / * and will perform a 
// calculation with the given numbers.

// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

// Expected results
// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

// calculator(4, "/", 2) ➞ 2

function calculator(a,operator,b){
if (a===0){
    return "can not divide by 0"
}return a+operator+b
}

console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2) )
