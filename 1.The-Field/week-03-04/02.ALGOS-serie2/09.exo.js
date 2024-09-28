// Exercise.
// Given an input string, reverse the string word by word, 
// the first word will be the last, and so on.

// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Expected results
// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"

function reverseWords(word){
let split= word.trim().split(" ").filter(el=>el).reverse().join(" ");
    return `"${split}"`
}
console.log(reverseWords(" the sky is blue") )
console.log( reverseWords("hello   world!  ") )
console.log(reverseWords("a good example"))