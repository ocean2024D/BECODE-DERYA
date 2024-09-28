// Exercise.
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

// Expected results
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000


function frames(a, b){
return a*b*60

}
console.log(frames(1,1))
console.log(frames(10, 1))
console.log(frames(10, 25))