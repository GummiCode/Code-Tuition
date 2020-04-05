/*****************
 * Basic operators 
 */

let year, ageJohn, ageMark;
year = 2020
ageJohn = 28;
ageMark = 38;


 let yearJohn = year - ageJohn;
 let yearMark = year - ageMark

 console.log(yearJohn, yearMark);

let johnOlder = ageJohn > ageMark;

console.log (johnOlder);


/* the typeof operator returns a string stating what kind of operator a value is 
*/

console.log(typeof johnOlder);
console.log(typeof year);





/****************************
 * Operator Precedence
 */

let fullAge = 18;

let isFullAge = year - yearJohn >= fullAge;
console.log (isFullAge);

//Grouping

let averageAge = (ageJohn + ageMark) / 2;
console.log(averageAge);




//Multiple assignments

let x, y;

x = y = (3 + 5) * 4 - 6;
// = 8 * 4 - 6;
// = 32 - 6
// = 26

console.log(x, y);





// Novel JS Functions

// x = x * 2 would redefine x as x * 2;
// this can instead be written as...


x *= 2;
console.log (x);

// the same works with +, - & /

x /= 2;
console.log (x);

x += 10;
console.log (x);

x -= 10;
console.log (x);




//BMI Calculator

let massJohn, massMark, heightJohn, heightMark

massJohn = 75 // kg
massMark = 86 // kg
heightJohn = 1.67 // metres
heightMark = 1.71 // metres

let BMIJohn = massJohn / (heightJohn * heightJohn); // kg/metres^2
let BMIMark = massMark / (heightMark * heightMark); // kg/metres^2

console.log ("John's BMI is " + BMIJohn + ".");
console.log (`Mark's BMI is ${BMIMark}.`);

console.log(`Is John's BMI higher than Mark's BMI? ${BMIJohn >= BMIMark }.`);






