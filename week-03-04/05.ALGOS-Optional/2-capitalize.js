// 2.
// Create a function that capitalizes a string.

// ex:

// capitalize("belgium");
// // Result : "Belgium"

// capitalize("brazil");
// // Result : "Brazil"

// capitalize("brussels");
// // Result : "Brussels"

const capitalize=word=>
    (word.slice(0,1).toUpperCase())+word.slice(1)
console.log(capitalize("belgium"))