// // alert("Hello there !")
// // console.log("I am in the console")
// // let myName = "Henrique";
// const myName = "Henrique";

// const pi = 3.14;

// const thisIsAVariableName = "lorem ipsum";
// console.log(myName);

// alert(myName);

// let exchangeRate = 0.93;

// console.log(50 * exchangeRate);

// console.log(132 * exchangeRate);

// // Oups ! Today the exchange rate changed ! It's now 0.91 !
// // I can just change the variable and re-run my code

// exchangeRate = 0.91;

//_____________________________________________________________________________________________
//1.The-Field/WEEK-01b-02/04b.Practice.md

// var a = "3";
// var b = "8";

/***********Do not change the code above 👆*******/
// var a = 8;
// var b = 3;

/***********Do not change the code below 👇*******/

// console.log("a is " + a);
// console.log("b is " + b);

// let course = "javascript is cool";
// // console.log(course.trim())
// console.log(course.length);
// console.log(course.toUpperCase());
// console.log(course.indexOf("a"));
// console.log(course.lastIndexOf("a"));
// console.log(course.slice(0, 4));
// console.log(course.replace("not", "so"));
// console.log(course.charAt(4));
// let x = "I am watching Dev Dreamer";
// console.log(x.toUpperCase());
// console.log(x.slice(14, 25));

//_____________________________________________________________________________________________

//1.The-Field/WEEK-01b-02/06b.Practice.md
// DON'T TOUCH THIS LINE!
// const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// // YOUR CODE BELOW THIS LINE:
// let whisper = message .trim().toLowerCase() ;
// console.log(whisper)




// // DON'T TOUCH THIS LINE! (please)
// const word = "skateboard"; //Don't change this line!

// // YOUR CODE BELOW THIS LINE:

// console.log(word.slice(5, 10));

// // Numbers

// let random = Math.floor(Math.random() * 10);
// console.log(random);

// let randomFloat = Math.random() * 5;
// console.log(randomFloat);

// let number = 0.97865674214223233;

// console.log(number.toFixed(2)); //0.98 console/log
// console.log(number.toFixed(0)); //1
// console.log(number.toFixed(5)); //0.97866

// const city = "Brussels";

// let weatherCondition = "rainy";

// let temperature = 24.16879;

// const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(
//   temperature
// )}°C outside`;

// console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

// prompt("What is your name?");

// const name1 = prompt("What is your name?");
// const age = prompt("What is your age?");
// const country=prompt("Where do you live?");
// alert(`${name1} is ${age} years old lives in ${country} `)
//_____________________________________________________________________________________________

//1.The-Field/WEEK-01b-02/08.Practice.md_____________________________________________________________________________________________
//VAT
//_____________________________________________________________________________________________

// let price  = parseInt(prompt("what is the radius of a circle ?"));
// let VAT=price*0.21
// alert(`VAT is ${VAT}`)
//  price+=VAT

// alert(`price with VAT is ${price}`)

//_____________________________________________________________________________________________

//Surface of a circle
// let r =  parseInt(prompt("what is the radius?"));
// let surface = Math.PI*(2**r);
// console.log(`surface is ${surface}`)

//_____________________________________________________________________________________________
//1.The-Field/WEEK-01b-02/06b.Practice.md
//Make a Calculator!

// let questionFirstNumber = parseInt(prompt("what is the first number ?"));
// let operation = prompt("Choose the operation?(+,-,*,/)");
// let questionSecondNumber = parseInt(prompt("what is the first number ?"));

// let Total1 = questionFirstNumber + questionSecondNumber;

// alert( `SUM is ${Total}`)
//_____________________________________________________________________________________________

// BONUS: Make a program that can subtract, multiply, and also divide!
//_____________________________________________________________________________________________

//   if (operation === "-") {
//     let Total = questionFirstNumber - questionSecondNumber;
//     alert(`SUM is ${Total}`);
//   } else if (operation === "+") {
//     let Total = questionFirstNumber + questionSecondNumber;
//     alert(`SUM is ${Total}`);
//   } else if (operation === "*") {
//     let Total = questionFirstNumber * questionSecondNumber;
//     alert(`SUM is ${Total}`);
//   } else if (operation === "/") {
//     let Total = questionFirstNumber / questionSecondNumber;
//     alert(`SUM is ${Total}`);
//   }
//  else {
//   alert("please choose a valide operation(+,-,*,/)");
// }
//_____________________________________________________________________________________________

// question A
// QUESTION 1

// // QUESTION 2
// const a = null;
// const b = undefined;
// const c = 4;

// // console.log((!a && b) || c)

// // console.log(a == b && c)

// console.log(!b && "Hello" && c)

// WEEK-01b-02/11b.Exercise.md

// let username= prompt ("What is your name?")
// let animal = prompt ("which do you prefer, cats or dogs ?")

// if (animal==="dogs"){
// console.log(`${username} prefer ${animal}`)

// }else {console.log(`${username} prefer ${animal}`)}

// const mystery = "Profs677"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
//   console.log("YOU GOT IT!!!");
// } else {
//   console.log("TRY AGAIN");
// }

// Make a keyless car! This car will only let you drive if you are over 18. Make it do the following:
// let username= prompt ("What is your name?")
// let age= prompt ("What is your age?")

// if (age<18){

//     console.log("Sorry, you are too young to drive this car. Powering off");

// }else{
//     console.log("Congratulations on your first year of driving. Enjoy the ride!")
// }

// let favoriteFruit=prompt("what is his favorite fruit?").toLowerCase()

// if (favoriteFruit==="bananas"){
//     console.log("you like bananas as well.")
// }else if(favoriteFruit==="strawberry"){
// console.log( "you LOVE strawberries")
// }else if(favoriteFruit==="grape"){
//     let color=prompt("purple or green?")
//     if (color==="purple"){
//         console.log("I don't like purple grapes")
//     }else if (color==="green"){
//         console.log("green grapes are ok")

//     }else{
//         console.log (`I don't understand the word you said ${favoriteFruit}`)
//     }
// }

// https://www.programiz.com/javascript/library/array

//_____________________________________________________________________________________________

//1.The-Field/WEEK-01b-02/12b.Exercises.md
// const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// leaderboard[1]="Luna"
// leaderboard[leaderboard.length-1]="Draco"
// console.log(leaderboard)

// const initialArray = [
//     null,
//     true,
//     ["Apple", "two", undefined],
//     false,
//     ["three", "BeCode"],
//     4,
//     "I am a big bad wolf",
//     ["one"],
//   ];

// // YOUR CODE BELOW HERE:

// console.log(initialArray)
// console.log(initialArray[2][1])
// console.log(initialArray[4][0])
// console.log(initialArray[7][0])

// let newArray=[initialArray[7][0], initialArray[2][1],initialArray[4][0]]

// console.log(newArray)

// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// planets.shift()
// planets.push("Saturn")
// planets.unshift("Mercury")
// console;console.log(planets);
// //_____________________________________________________________________________________________
// const product ={
//     name:"iPhone 15",
//     inStock:true,
//     price:1249.90,
//     includedInPackage: ["case", "earphones", "charger"]

// }

// console.log(product.includedInPackage[1])

//Object Access Exercise
// const restaurant = {
//     name: "Ichiran Ramen",
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: "Brooklyn",
//     state: "NY",
//     zipcode: "11206",
//   };

//   //YOUR CODE GOES DOWN HERE:
// const fullAddress=(`${restaurant.address} + ${restaurant.city},${restaurant.state},${restaurant.zipcode}`)
// console.log(fullAddress)

// //Modifying and adding properties

// const movie = {
//     title: "Braveheart",
//     year: 1995,
//     director: "Mel Gipson",
//     genre: ["action", "drama"],
//     rating: 92,
//   };

//   console.log(movie.rating); // Prints 92

//   movie.rating = 97;

//   console.log(movie.rating); // Prints 97

//   movie.budget = 53.000

//   console.log(movie);

// Prints :

/*
  {
    title: "Braveheart",
    year: 1995,
    director: "Mel Gipson",
    genre: ["action", "drama"],
    rating: 92,
    budget: 53.000.000
  }
  */

//BXL-torvalds-2024/1.The-Field/WEEK-01b-02  /16.ForLoops.md

// for (let i=2; i <= 20; i+=2) {

//         console.log(i);

// }
// odd numbers

//  for (let i=1; i<= 20; i+=2){
//     console.log(i);
//  }

// for (let i=100 ; i>=10; i-=10){
//     console.log(i)
// }

// for(let i=25; i>=0;i-=5){
//     console.log(i)
// }

// for (let i=10; i<=1000 ;i=(i*10)){
//     console.log(i)
// }

// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
// for(let i=(animals.length)-1;i>=0;i--){
//     console.log(animals[i])
// }

// const users = [
//     {
//       firstName: "Vito",
//       lastName: "Corleone",
//     },
//     {
//       firstName: "William",
//       lastName: "Wallace",
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//     },
//     {
//       firstName: "Amadeus",
//       lastName: "Mozart",
//     },
//     {
//       firstName: "Barack",
//       lastName: "Obama",
//     },
//   ];

//   for(let i=0; i<users.length;i++){

// console.log(`My name is ${users[i].firstName} ${users[i].lastName} ${i}`)

//   }

// for (let i = 1; i <= 5; i++) {
//     console.log("i is " + i);
//     for (let j = 1; j <= 3; j++) {
//       console.log("----- j is " + j);
//     }
//   }

//   const seatingChart = [
//     ["Colas", "Benoit", "Elodie"],
//     ["Sola", "Irina", "Antonino", "Eli"],
//     ["John", "Maryna", "Naike", "Fabrice"],
//   ];

//   // I can use nested loops to do that :

// for(let i =0; i<seatingChart.length;i++){
//     const row = seatingChart[i];
//     console.log(seatingChart[i])
//     for(let j=0; j<seatingChart[i].length;j++){
//         console.log(seatingChart[i][j])
//     }

// }
//1.The-Field/WEEK-01b-02/18.Exercise.md
// //_____________________________________________________________________________________________

// let numberOfEssai = 0;
// let random = Math.floor(Math.random() * 10);

// while (numberOfEssai < 3) {
//   alert(random);
//   let question = parseInt(prompt("Enter a number between 0 and 10?"));
//   if (isNaN(question)) {
//     alert("you entered an invalid number " + "you entered  " + question);
//     numberOfEssai -= 1;
//   } else if (question === random) {
//     alert("Congratulation!" + " " + random);
//     break;
//   }
//   numberOfEssai += 1;
// }
// if (numberOfEssai === 3) {
//   alert("you attempted 3 times you are lost");
// }
// //_____________________________________________________________________________________________

// const colors = ["red", "orange", "blue", "violet"];

// For loop example

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// // For... of example

// for (let item in colors) {
//   console.log(item);
// }

// For both, the result will be

/*

"red"
"orange"
"blue"
"violet"

*/

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["football", "movies", "guitar"],
// };

// for (let key in user) {
//   console.log(key);
// }

// Result :

/*
firstName
lastName
age
hobbies
*/
// for (let key in user) {
//   console.log(`${key} : ${user[key]}`);
// }

// Result :

/*
firstName : John
lastName : Doe
age : 30
hobbies : ["football", "movies", "guitar"]
*/

//1.The-Field/WEEK-01b-02/20.Exercise.md

// //TODO
// i = 0;

// let toDoList = [];
// while (toDoList.length < 10) {
//   let userQuestion = prompt(
//     "Please enter what do you want to do (new ,list,delete,quit)"
//   );

//   alert(userQuestion);
//   if (userQuestion === "new") {
//     let userList = prompt("Please enter your todo");
//     toDoList.push(userList);
//     alert(toDoList);
//     console.log(toDoList);
//   } else if (userQuestion === "list") {
//     alert(toDoList);
//     for (i = 0; i < toDoList.length; i++) {
//       alert(i + ". " + toDoList[i]);
//     }
//   } else if (userQuestion === "delete") {
//     let deleteItem = parseInt(
//       prompt("what do you want to delete please enter index number?")
//     );
//     for (i = 0; i < toDoList.length; i++) {
//       alert(i + ". " + toDoList[i]);
//     }
//     let array = toDoList.indexOf(deleteItem);
//     toDoList.splice(array, 1);
//     alert(deleteItem + toDoList[deleteItem]+" "+" is removed from todo");
//     console.log(toDoList);
//   }
//   i++;
// }
//missing quit

/////////////////////////////////////////////////////
// VARIABLES

// let answer;
// const todos = [];

// // FUNCTIONS

// const newTodo = () => {
//   const todo = prompt("Insert a todo");
//   todos.push(todo);
// };

// const listTodo = () => {
//   console.clear();
//   for (let i = 0; i < todos.length; i++) {
//     console.log(i + 1 + " : " + todos[i]);
//   }
// };

// const deleteTodo = () => {
//   const deletedIndex = parseInt(prompt("which todo you want to delete ?"));

//   if (isNaN(parseInt(deletedIndex)) || deletedIndex < 1) {
//     console.log("This is not a valid index");
//     return;
//   }

//   console.log(`${todos[deletedIndex - 1]} was deleted`);
//   todos.splice(deletedIndex - 1, 1);
// };

// PROGRAM

/*
new
list
delete
quit
*/

while (answer !== "quit") {
  answer = prompt("What do you want to do ?");

  switch (answer) {
    case "new": {
      newTodo();
      break;
    }
    case "list": {
      listTodo();
      break;
    }
    case "delete": {
      deleteTodo();
      break;
    }
    case "quit": {
      console.clear();
      console.log("Thank you ! Bye!");
      break;
    }
  }
}

//1.The-Field/WEEK-01b-02/21b.exercises.md

// function dies(faces,Timess){
// let random=Math.floor(Math.random() * faces + 1)

//    return (`Die  ${Timess}":" ${random}`);
// }
// i=0;
// for(let i=0;i<=5;i++){
// let diesRull=dies(6,i)
// console.log(diesRull)
// }
// function repeat(string,number){
// let str= ""
// for (let i = 0; i<number;i++){
//   (str+=string);
// }
// return str
// }
// console.log(repeat("E",3))

// function great(firstName,lastName){
// return (`This is ${firstName} ${lastName}`)
// }
// console.log(great("Derya","Lacin"))

// function sum(num1,num2){
//   if(isNaN(num1,num2)){
// console.log("Passed value is not a number");
// }else{
// return num1+num2}
// }

// const myVariable = sum(3, 6);
// console.log(myVariable);

// function logs() {
//   console.log("Hello");
//   console.log("World");
//   return 4;
//   console.log("Goodbye");
//   console.log("World");
// }

// const myVariable = logs();

// console.log(myVariable);

// function isShortWeather(temp){
//   if (temp<=24){
//     return false
//   }else{
//     return true
//   }

// }
// console.log(isShortWeather(25))

// let array=[3, 5, 7]

// function lastElement (array){
//   return (array[(array.length)-1])

// }

// console.log(lastElement(array))

// function capitalize(string){
//  return string[0].toUpperCase()+ string.slice(1)

// }

// console.log(capitalize("eggplant")); // "Eggplant"
// // capitalize("pamplemousse"); // "Pamplemousse"
// // capitalize("squid"); //"Squid"

// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// let array = [5, 6];
// console.log(sumArray(array));

// function returnDay(number){

//   let array= ["null","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// if(number>7){

//   console.log(null)
// }else {
//  return  array[number]
// }

// }
// console.log(returnDay(6))

//1.The-Field/WEEK-01b-02/23.FunctionExpressionsHigherOrder.md

// const callTwice = function (func,number) {
//   if (number===0){
//    console.log(null + " enter a number  ") }else{
//   for(let i=1;i<=number;i++)
//   {
//     func();
//   }
//   }
// };

// // Here, the callTwice function takes another function as a parameter and call it two times

// const rollDie = function () {
//   const roll = Math.floor(Math.random() * 6 + 1);
//   console.log(roll);
// };

// callTwice(rollDie,5);

// const myArray = ["hello", "goodbye", "see you later"];

// myArray.forEach(function (element) {
//   console.log(element);
// });

// try {
//   console.log(hello);
// } catch {
//   console.log("The above code didn't work");
// }

// console.log("End of program");

// const arr1 = ["cat", "dog"];
// const arr2 = [...arr1, "panda"];

// console.log(arr2);

// Let's copy the arrayOne !
// const arrayOne = [1, 2, 3, 4];

// const arrayTwo = [...arrayOne];

// arrayOne.push(5);

// console.log(arrayOne);
// console.log(arrayTwo);

//24
// Little exercise :

// Create an object called user;
// Give him a fistName, a lastName and age;
// Give him a method printAge and aYearHasPast
// aYearHasPast should add 1 to the age property.
// printAge should console.log (firstName) (lastName) is (age) years old
// Play in your console to print his age and then increment his age.

//____________________________________________________________________________________________________________
//1.The-Field/WEEK-01b-02/24.Methods.md
// const user = {
//   firstName: "Nichole",
//   LastName: "hers",
//   age: 7,
 
//   aYearHasPast: function () {
//     this.age += 1;
//   },
//    PrintAge: function () {
//     this.aYearHasPast()
//     return(
//       this.firstName +
//         " " +
//         this.LastName +
//         " " + this.age);
    
//   },
// };
// console.log(user.PrintAge());

