// Exercise.
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.
// Expected results
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

function animals(chicken, cow, pigs) {
  return chicken * 2 + cow * 4 + pigs * 4;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
