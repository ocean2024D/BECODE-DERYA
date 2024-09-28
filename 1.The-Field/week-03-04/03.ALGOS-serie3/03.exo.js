// Exercise.
// Carlos is a huge fan of something he calls smooth sentences.

// A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

// The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

// Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

// Notes
// The last and first letters are case insensitive.
// There will be no punctuation in each sentence.
// Expected results
// isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

// isSmooth("Someone is outside the doorway") ➞ false

// let array= ("Someone es outside the doorway")
// array=array.split(" ")
// let a;
// for(let i = 0;i<=array.length; i++){
//   console.log((array[i][0]).toLowerCase())
//   console.log(array[i][array[i].length-1])
//   if ((array[i][array[i].length-1])===(array[i][0]).toLowerCase()===true){

//   a=true
//   console.log(a)
//   if (a===true){
//     console.log("smooth")
//   }else{
//     console.log(false)
//   }
//   }else{
//     a=false;  console.log(a)

//   }
// }

function isSmooth(sentence) {
  let array = sentence.split(" ");
  let isSmooth = true;

  for (let i = 0; i < array.length - 1; i++) {
    let lastLetter = array[i][array[i].length - 1].toLowerCase();
    let firstLetter = array[i + 1][0].toLowerCase();

    if (firstLetter !== lastLetter) {
      isSmooth = false;
      break;
    }
  }

  return isSmooth;
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));
