/* *************************
Vairables and data types
*/


/*
console.log('Hello World!!!');

let firstName = "John";
console.log(firstName);

let lastName = "Smith";
console.log(lastName);

let age = 28;
console.log(age);


let fullAge = true;
console.log(fullAge);

//This appears to be the term for 'legal adult' 
//in the tutor's country.

/* And this
is a 
multiline
comment */

/*
let job = "Teacher";
console.log(job);

let $salary = 32;
console.log($salary);
*/


/* ************************
Variable mutation and type coercion 
*/


let firstName = "John";
let age = 24;

console.log(firstName + " " + age);

/* The above logs as a string even though age is a number;
This automatic conversion of the number to a string
is an example of Type Coercion :3
*/

let job, isMarried;
job = "Teacher";
isMarried = false;

/*This is an example of variable mutation
*/

console.log(firstName + " is a " + age + " year old " + job +". Some say he is married. This is " + isMarried + "!");

/* Now we're mutating the values of some of the above variables, then we'll make it appear in a pop-up! 
*/

age = 28;
job = "astronaut";

alert(firstName + " is a " + age + " year old " + job +". Some say he is married. This is " + isMarried + "!");

/* Next we're going to use a Prompt to get data from the user. A Prompt is a pop-up with a free text field. The input can be used as a value in our code!
*/

let lastName = prompt("What is his last name?");
firstName = prompt("What is his first name?");

console.log (firstName + " " + lastName);

