// Exercise. Caesar Cipher
// Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.

// We switch every letter with, for example, two letters before in the alphabet.

// The Caesar cipher function will take two parameters str and num; str represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)

// Notes
// Make it case incensitive
// You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c)
// Expected results
// caesarCipher("zoo keeper", 2) ----> "bqq mggrgt"

// caesarCipher("bqq mggrgt", -2) ----> "zoo keeper"

// caesarCipher("My name is Henrique", 3) ----> "pb qdph lv khqultxh "
function caesarCipher(str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let strL = str.toLowerCase();
  let z = 0;
  let newString = [];
  for (let i = 0; i < strL.length; i++) {
      let index = alphabet.indexOf(strL[i]);
      if (index === -1) {
          newString.push(strL[i]);
      } else {
          if (index + num >= 26) {
              z = index + num - 26;
          } else if (index + num < 0) {
              z = index + num + 26;
          } else {
              z = index + num;
          }
          newString.push(alphabet[z]);
      }
  }
  return newString.join("");
}

console.log(caesarCipher("My name is Henrique", 3)); 
console.log(caesarCipher("bqq mggrgt", -2));
console.log(caesarCipher("zoo keeper", 2));
