// Exercise.
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Expected results
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

function getTotalPrice(Object){
    let TotalPrice= 0
for(let i=0 ; i<Object.length;i++){
   TotalPrice+= Object[i].quantity*Object[i].price
  
}return TotalPrice.toFixed(1)

}

console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]))
console.log(getTotalPrice([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Eggs", quantity: 12, price: 0.10 },
      { product: "Bread", quantity: 2, price: 1.60 },
      { product: "Cheese", quantity: 1, price: 4.50 }
    ]))
console.log(getTotalPrice([
      { product: "Chocolate", quantity: 1, price: 0.10 },
      { product: "Lollipop", quantity: 1, price: 0.20 }
    ]))
     