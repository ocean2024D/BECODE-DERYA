// Exercise : Ransom note
// Write a function called ransomNote which takes two parameters : noteText and magazineText.

// The goal is : with all the words of magazineText, you should be able to create the noteText.

// The function should return true if we are able to write the noteText with the words from magazineText or false if we can't.

// Notes
// Here are two examples :

// noteText = "this is a secret note to you from a secret admirer"
// magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
// In the case above, it would be false. Why ? Because all the words are present, but secret appears only once in the magazineText, but there are two secret in the noteText

// If the noteText was

// "this is a note to you from a secret admirer"
// That would work and would be true

// Test your code with these text and others.

function ransomNote(noteText, magazineText) {
  let a = noteText.split(" "), b = magazineText.split(" ");
  for (let word of a) {
    let wordIndex = b.indexOf(word);
    if (wordIndex === -1) return false;
    b.splice(wordIndex, 1);
  }
  return true;
}
console.log(
  ransomNote(
    "this is a secret note to you from a secret admirer",
    "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
  )
);

console.log(
  
  ransomNote(
    "this is a note to you from a secret admirer",
    "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
  ))