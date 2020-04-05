// Objects and Properties
// Key value pairs
// Key is aka Property


// Objects can be written in this way, called Object Literal:

let john = {
	firstName: `John`,
	lastName: `Smith`,
	birthYear: 1990,
	family: [`Jane`, `Mark`, `Sven`, `Emily`],
	job: `teacher`,
	isMarried: false
};

console.log(john);




// Calling properties:

console.log(john.job);

console.log(john[`birthYear`]);
//Note that we need to use a STRING to call a property using bracket syntax, weird as that is!


let callBirthYear = john.birthYear;

console.log (callBirthYear);



//redefining (mutating) properties:

john.job = `designer`;
john[`isMarried`] = true;
console.log(john);



//Objects can also be written this way, which is called New Object Syntax:

let jane = new Object();
jane.firstName = `Jane`;
jane.birthYear = 1990;
jane[`lastName`] = `Smith`;
jane[`job`] = `architect`;

console.log(jane);


/*

const pokemon001 = {
		pokemonName: `BULBASAUR`,
		type1: `Grass`,
		type2: `Poison`,
		hp:	100,
		moves: [`Leech Seed`, `Sleep Powder`, `Vine Whip`, `Solar Beam`],
		evolvesInto: `Ivysaur`,
		evolvesLevel: 16
};

console.log(pokemon001);

*/

