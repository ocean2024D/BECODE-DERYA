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

function calculator(a, operator, b) {
    if (operator === "/" && b === 0) {
        return "Cannot divide by 0";
    }

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}

console.log(calculator(2, "+", 2)); // ➞ 4
console.log(calculator(2, "*", 2)); // ➞ 4
console.log(calculator(4, "/", 2)); // ➞ 2
console.log(calculator(4, "/", 0)); // ➞ "Cannot divide by 0"

console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2) )
