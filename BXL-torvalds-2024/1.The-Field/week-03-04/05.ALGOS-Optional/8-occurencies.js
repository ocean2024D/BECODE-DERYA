// 8.
// Create a function that takes a string and a letter and counts how many times the letter appears in the string

// ex :

// occurencies("hello", "l");
// // Result : 2

// occurencies("abracadabra", "a");
// // Result : 5

// occurencies("oups", "z");
// // Result : 0

const occurencies = (word, lettre) => {
  let wordD = word.split("").filter((char) => char === lettre).length;
  return wordD;
};
console.log(occurencies("hello", "l"));
console.log(occurencies("abracadabra", "a"));
console.log( occurencies("oups", "z"));


