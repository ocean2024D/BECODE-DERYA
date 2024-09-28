// Exercise.
// Create a function that determines whether a number is Oddish or Evenish.
//  A number is Oddish if the sum of all of its digits is odd, 
//  and a number is Evenish if the sum of all of its digits is even. 
//  If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Expected results
// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0

function oddishOrEvenish(number){
    let split=number.toString().split("")
    let sum=0
    for (let i=0;i<=split.length-1;i++){
        sum+=parseInt(split[i])
        console.log(sum)
    }if(sum % 2 === 0){
        return "Evenish"
    } return  "Oddish";
}

console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373) )
console.log(oddishOrEvenish(4433))
