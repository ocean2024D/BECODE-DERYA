// 3.
// Find the days between 2 given days

// ex :

// dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// // Result : 366

// with b-a we find miliseconds we have to divide to (1000*60*60*24) for find days 
const dayDif = (a,b)=> (b-a)/ (1000 * 60 * 60 * 24);;
console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")))