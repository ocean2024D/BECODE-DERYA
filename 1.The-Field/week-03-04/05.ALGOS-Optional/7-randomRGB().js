// 7.
// Create a function that generates a random rgb value.
// The outcome should be the same as we declare it in CSS : rgb(?, ?, ?)
// ex :
// randomRGB();
// // Result : "rgb(232, 115, 164)"
const randomRGB = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb(' +  red + ',' +  green + ',' +  blue + ')';
  return rgbColor;
}
console.log(randomRGB())
