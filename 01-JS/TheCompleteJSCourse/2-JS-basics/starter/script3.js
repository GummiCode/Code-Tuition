// if/else statements

let firstName = `john`;
let civilStatus = `single`;


if (civilStatus === `single`) {
	console.log(`${firstName} is single.`)
} else {
	console.log (`${firstName} is not single.`)
};


let isSingle = true;


if (isSingle) {
	console.log(`${firstName} is single.`)
} else {
	console.log (`${firstName} is not single.`)
};




// if/else example 2: BMI Calculator

let massJohn, massMark, heightJohn, heightMark

massJohn = 70 // kg
massMark = 86 // kg
heightJohn = 1.67 // metres
heightMark = 1.71 // metres

let BMIJohn = massJohn / (heightJohn * heightJohn); // kg/metres^2
let BMIMark = massMark / (heightMark * heightMark); // kg/metres^2

console.log ("John's BMI is " + BMIJohn + ".");
console.log (`Mark's BMI is ${BMIMark}.`);

//console.log(`Is John's BMI higher than Mark's BMI? ${BMIJohn >= BMIMark }.`);

if (BMIJohn > BMIMark) {
		console.log (`John's BMI is higher than Mark's`)	
} else {
		console.log (`Mark's BMI is higher than John's`)
};


// single line IF

// if your IF statement has only one line, you don't need to use curly braces around the operation.

if (BMIJohn > BMIMark) console.log(`Mark's kinda skinny!`);


// Boolean Operators

let age = 28;

if (age < 13) {
	console.log (`${firstName} is a boy.`)
} else if ( age >= 13 && age < 18 ) {
	console.log (`${firstName} is a teenager`)
} else if (age >= 18 && age <20) {
	console.log(`${firstName} is a young adult.`)
} else {
	console.log (`${firstName} is an adult.`)
};





//The Ternary Operator, aka The Conditional Operator

age >= 18 ? 
	console.log (`${firstName} drinks beer`)
	:
	console.log(`${firstName} drinks juice.`);
	
let drink = age >= 18 ? (`${firstName} drinks beer`) : (`${firstName} drinks juice.`);

console.log(drink);




// The Switch Statement

let job = `designer`;

switch(job) {
	case `teacher`:
		console.log(`${firstName} teaches people how to code.`);
		break;
	case `driver`:
		console.log (`${firstName} chaperones people around Lisbon.`);
		break;
	case `designer`:
		console.log (`${firstName} designs beautiful websites.`);
		break;
	default:
		console.log (`${firstName} has a nice time at home.`);
	};

//As ypu can see, a switch statement is often much neater than an if/else!

//Here's the previously created if/else statement redesigned as a switch statement. It works a bit differently because we're using numeric ranges. Rather than looking for specific strings, we'll check if age falls within specific ranges, by seeing if a test is true or false. 


switch (true) {
	case age <13:
		console.log (`${firstName} is a child.`);
		break;
	case age >= 13 && age < 18:
		console.log (`${firstName} is a teenager`);
		break;
	case age >= 18 && age <20:
		console.log(`${firstName} is a young adult.`);
		break;
	default:
	console.log (`${firstName} is an adult.`);
};




// Truthy and Falsy Values

/* 	Falsy values:
	Falsy values aren't false, but will evaluate to false in an if/else statement condition.
		Undefined
		Null
		Zero
		Empty Strings
		NAN (Not A Number)

	Truthy Values: Everything else.
	Eg. strings, numbers.
	*/

//We can use an if/else statement to display whether a value is defined or not based on its falsey/truthiness. Note that a clause has to be included in case the value is 0, as this would show up as falsey!

let height = 23;

if (height || height === 0) {
	console.log (`Height is defined`);
} else {
	console.log (`Height is not defined`);
;}	




// Type Coercion: === and ==

/* === is not the same as ==.
Both check whether two values are equal.

However, == permits type coercion. This is a feature of JS which allows program to equate to values to one another even if they're a different type of data. For example. the number 23 == the string "23".

=== does not permit type coercion. It checks not just the value of a variable, but also the type of data, and if the data type does not match then it will return false.
For example, 23 === 23, but 23 does not === `23`.

Both of these have their uses, but it is best form to use === whenever possible because using == can allow errors to creep into your code.
*/

if (height === `23`) {
	console.log('The == operator does type coercion!')
} else {
	console.log(`The === operator does not do type coercion!`)
};




// Coding Challenge 2

let teamJohn, teamMark, teamMary;

teamJohn = (1 + 2 + 2) / 3;
teamMark = (1 + 3 + 1) / 3;
teamMary = (3 + 2 + 1) / 3;

console.log(`Team John scored ${teamJohn} points! Team Mark scored ${teamMark} points! Team Mary scored ${teamMary} points!`);

switch (true) {
	case (teamJohn > teamMark && teamJohn > teamMary) :
		console.log (`Team John wins!`);
		break;
	case (teamMark > teamJohn && teamMark > teamMary):
		console.log (`Team Mark wins!`);
		break;
	case (teamMary > teamJohn && teamMary > teamMark) :
		console.log (`Team Mary wins!`);
		break;

	default:
		console.log (`It's a tie! There's no clear winner!`);
}

// This code doesn't currently show who was in the tie. Perhaps another time ^__^




// Functions

let thisYear = 2020;

function calculateAge(birthYear) {return thisYear - birthYear};

let ageSven = calculateAge(2000);


// Arrow Syntax (much better!)

console.log (ageSven);

let quickAge = birthYear => thisYear - birthYear;

console.log(quickAge(2000));


//Years until retirement

let retirementAge = 70;

let yearsUntilRetirement = (firstName, birthYear) => {
	let retirementYears = 70 -(thisYear - birthYear);
	return `${firstName} will be of retirement age in ${retirementYears} years!`
};

console.log(yearsUntilRetirement(`Sven`, 2000));

//Alternative Years until retirement

let yearsUntilRetirementTwo = (firstName, birthYear) => {
	let retirementYears = 70 -(thisYear - birthYear);

	switch(true){
		case(retirementYears > 0):
			console.log(`${firstName} will be of retirement age in ${retirementYears} years!`);
			break;
		case(retirementYears < 0):
			console.log(`${firstName} retired ${-retirementYears} years ago!`);
			break;
		default:
			console.log (`${firstName} retires this year!`);
			break;
};
};

yearsUntilRetirementTwo(`Swen`, 2010);
yearsUntilRetirementTwo(`Sben`, 1942);
yearsUntilRetirementTwo(`Sjen`, 1950);




// Function Expressions & Function Declarations

/* Expressions are pieces of code which throw out a value, or values. It has an output.

For example, return (5) is an expression.

So is console.log(`Petrichor`)

*/


/* Statements are pieces of code that process data, but do not return data in and of itself.

An example would be a function, as data needs to be passed into it for it to give an output. It doesn't provide a value independantly.

for example,

let wages = (workHours, hourlyPay) => return workHours * hourlyPay;

gives no output on its own, ad so it is a statement.

However, if you call it and chuck values into it, that would be an expression ^__^

return wages (8, 15);



//A couple of simple examples would be that
//A function that returns a value is an expression
//Whereas a function which processes data but doesn't return it is a statement.



// A function declaration is where you just slam out a function

function joobity(a, b) {a + b};

// A function expression is where you create a variable that contains a function.

let jobStatement = (job, firstName) =>  {return `${firstName} is a ${job}.`};

console.log (jobStatement(`cook`, `Alun`));
console.log (jobStatement(`pilot`, `Janine`));