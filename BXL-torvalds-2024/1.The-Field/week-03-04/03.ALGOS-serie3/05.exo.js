// Exercise.
// Create a function that converts Celsius to Fahrenheit and vice versa.

// Notes
// Round to the nearest integer.
// If the input is incorrect, return "Error".
// Look on Google how to convert F to C and vice-versa
// Expected results
// convert("35°C") ➞ "95°F"

// convert("19°F") ➞ "-7°C"

// convert("33") ➞ "Error"

function convert(ss) {
  let num = parseInt(ss);
  let Celcius = (num - 32) / (9 / 5);
  let Fahrenheit = (num * 9) / 5 + 32;
  if (ss.includes("°C")) {
    return Fahrenheit.toFixed(0) + "°F";
  } else if (ss.includes("°F")) {
    return Celcius.toFixed(0) + "°C";
  } else {
    return "Error";
  }
}

console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33"));
