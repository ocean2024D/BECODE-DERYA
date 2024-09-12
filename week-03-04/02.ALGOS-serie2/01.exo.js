// Exercise.
// In a board game, a piece may advance 1-6 tiles forward depending 
// on the number rolled on a six-sided die. If you advance your piece
//  onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? 
// Create a function that takes your position a and your friend's 
// position b and returns a boolean representation of whether it's 
// possible to earn a bonus on any die roll.

// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.
// Expected results
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

function possibleBonus(a,b){
// a is my position
//b is my friend's position

    if (a < b && b-a<=6){
        return true
    }return false
}
console.log(possibleBonus(3, 7))//true
console.log(possibleBonus(1, 9)) // bigger than 6 false
console.log(possibleBonus(5, 3)) // false bigger than my friend's position i can not go back