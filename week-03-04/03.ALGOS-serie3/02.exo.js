// Exercise.
// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Notes
// There is exactly one space between each word and no punctuation is used.

// Expected results
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

function reverseOdd(word) {
  let newArrayListReserved = [];
  let array = word.split(" ");
  for (let i = 0; i < array.length; i++) {
    let reversed = array[i].split("").reverse().join("");
    if (array[i].length % 2 === 1) {
      newArrayListReserved.push(reversed);
    } else {
      newArrayListReserved.push(array[i]);
    }
  }
  return newArrayListReserved.join(" ");
}

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
