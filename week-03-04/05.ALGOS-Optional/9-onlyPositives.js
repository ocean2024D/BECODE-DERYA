// 9.
// Create a function that returns the sum of all positive numbers in an array. (negative numbers should be ignored). If only negative numbers are present, it should return 0

// ex :

// onlyPositives([1, 6, 2, -3, 5, -12]);
// // Result : 14

// onlyPositives([-3, -4, -2]);
// // Result : 0

const onlyPositives = (numbers) => {
    return numbers
        .filter(number => number > 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0); 


    };

console.log(onlyPositives([1, 6, 2, -3, 5, -12]));

console.log(onlyPositives([-3, -4, -2]));
