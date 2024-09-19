// Exercise. Reverse word.
// Create a function that takes a string parameter and return another string with all the words inversed.

// Notes
// Attention !

// The order of the words doesn't change, just the letters of each word
// Expected results
// "This is a string of words" ----> "siht si a gnirts fo sdrow"

function reversed(word) {
  let seperatedAray = word.split(" "); //before we sepeperated phrase and put it in array
  let reversed = []; // created a variable for keep the reversed words
  for (let i = 0; i < seperatedAray.length; i++) {
    reversed.push(seperatedAray[i].split("").reverse().join(""));
    console.log(reversed);
  }
  return `" ${reversed.join(" ")} "`;
}
console.log(reversed("This is a string of words"));
