// Exercise.
// You will be given an array of drinks, with each drink being an object
//  with two properties: name and price.
//   Create a function that has the drinks array as
//    an argument and return the drinks objects sorted by price
//     in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 10},
//   {name: "lime", price: 10},
//   {name: "coke", price: 8},
//   {name: "vodka", price: 17},
//   {name: "water", price: 3},
// ]
// Expected results
// The output of the sorted drinks object will be:

// sortDrinkByPrice(drinks) ➞ [
//     {name: "water", price: 3},
//     {name: "coke", price: 8},
//     {name: "lemonade", price: 10 },
//     {name: "lime" , price: 10},
//     {name: "vodka", price: 17},
// ]

function sortDrinkByPrice(drinks) {
  return drinks.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
}
const drinks = [
  { name: "lemonade", price: 10 },
  { name: "lime", price: 10 },
  { name: "coke", price: 8 },
  { name: "vodka", price: 17 },
  { name: "water", price: 3 },
];
console.log(sortDrinkByPrice(drinks));
