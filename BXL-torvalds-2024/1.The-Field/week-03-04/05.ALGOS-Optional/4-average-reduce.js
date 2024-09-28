// 4.
// Find the average between multiple numbers using reduce method.

// ex:

// average(1, 2, 3, 4);
// // Result: 2.5

///////////////////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4]
// const average= numbers.reduce((accumulator,currentValue)=>{
// return (accumulator+currentValue)},0)/numbers.length
// console.log(average);

//(...numbers) rest parametresi il return to array
/////////////////////////////////////////////////////////////////////
const average = (...numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length;
  };
  console.log(average(1, 2, 3, 4))
  ///////////////////////////////////////////////////////////////////////////////
  //const aa=(...numbers)=>{return numbers} //rest arametresi

//  console.log(aa(1,2))