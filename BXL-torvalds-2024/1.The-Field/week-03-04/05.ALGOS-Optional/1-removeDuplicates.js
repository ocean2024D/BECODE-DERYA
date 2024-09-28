// 1.
// Create a function that remove duplicates from an array.

// ex:

// removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]);
// // Result : [4, 9, 5, 1, 3, 2, 8]

// removeDuplicates(["hello", "world", "goodbye", "world"]);
// // Result : ['hello', 'world', 'goodbye']

// removeDuplicates([true, true, false, true, true, false]);
// // Result : [true, false]

// const removeDuplicates=(arr)=>{
// let arrNew=[...new Set(arr)];
// return arrNew
// }

///////////////////////////////////////////


// const removeDuplicates = arr => [...new Set(arr)]; or 


const removeDuplicates = (array) => array.filter((item, index, self) => self.indexOf(item) === index);
console.log(removeDuplicates( [4, 9, 5, 1, 3, 2, 4, 1, 8]));
console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]))
console.log(removeDuplicates(["hello", "world", "goodbye", "world"]))
console.log(removeDuplicates([true, true, false, true, true, false]))


