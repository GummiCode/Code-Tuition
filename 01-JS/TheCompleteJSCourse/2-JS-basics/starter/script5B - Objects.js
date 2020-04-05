
//Objects and Methods


/*

const john = {
	firstName: `John`,
	lastName: `Smith`,
	birthYear: 1990,
	family: [`Jane`, `Mark`, `Sven`, `Emily`],
	job: `teacher`,
	isMarried: false,
	calcAge: function(thisYear) {
		return thisYear - this.birthYear;
	}
};

console.log(john.calcAge(2020));

*/


//Creating a new parameter in an object:


/*
john.age = john.calcAge(2020);
console.log (john.age);
console.log(john);
*/


//The 'this' keyword:

/* We can use values in ao nobject in functions within that object. Use 'this.' and then the property, eg. 'this.firstName', to call it within the same object.
*/


// let quickAge = birthYear => thisYear - birthYear;


////////////////////////////////////
/*CHALLENGE: BMI Comparison between Objects
*/


const john = {
	firstName: `John`,
	lastName: `Smith`,
	massKG:	75,
	heightM:	1.6,
	bmiCalc: function() {
		this.bmi = this.massKG / (this.heightM * this.heightM);
		return this.bmi;
						},
};


const mark = {
	firstName: `Mark`,
	lastName: `Smith`,
	massKG:	75,
	heightM:	1.6,
	bmiCalc: function() {
		this.bmi = this.massKG / (this.heightM * this.heightM);
		return this.bmi;
						},
};


switch (true){
	case (john.bmiCalc() === mark.bmiCalc()):
		console.log (`${john.firstName} and ${mark.firstName} have the same BMI of ${john.bmi}! What a coincidence!`);
		break;
	case (john.bmi > mark.bmi):
		console.log(`${john.firstName} has a higher BMI than ${mark.firstName}. ${john.firstName}'s BMI is ${john.bmi}.`);
		break;
	case (john.bmi < mark.bmi):
		console.log(`${mark.firstName} has a higher BMI than ${john.firstName}. ${mark.firstName}'s BMI is ${mark.bmi}.`);
		break;
	default:
		break;
	}

	/* A few things to note:
	1.	We included a function called bmiCalc in each object to caclulate the BMI. It also defines a new parameter in each object called this.bmi (so john.bmi and mark.bmi).
	2. The function isn't run until we call it. And so name.bmi doesn't exist until then.
	3. We actually didn't call the function until the switch. the first case of the switch used the function.
	4. When the function is called in the first instance of the switch, name.bmi is created in each object. As such, in the rest of the switch we can call name.bmi (instead of calling the function again each time w eneed to cite the BMI). Indeed, after the switch name.bmi still exists, as is shown by the console.log below.
*/

	console.log (john.bmi);

// Once we get to factory Functions we'll see a way of creating multiple objects with the same code without typing it all out twice (dry code) :3

