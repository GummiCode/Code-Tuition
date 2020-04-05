// variant A.
//console.log(`Hello, ${prompt("What is your name?")}, nice to meet you!`);


//variant B.
/*
let name = prompt("What is your name?");

const callName = () => {
	if (name === "") {
		name = prompt ("Please enter a value. What is your name?");
		callName ();
	} else {
		console.log(`Hello ${name}, nice to meet you!`)
	} ;
};

callName ();
*/



//variant C.
let name = prompt("What is your name?");

const callName = () => {
	if (name === "") {
		name = prompt ("Please enter a value. What is your name?");
		callName ();
	} else if (name.toLowerCase() == "egbert") {
		console.log(`Eww! It's ${name}! Go away ${name}, you're mean and we don't like you ${name}!`);
	} else {
		console.log(`Hello ${name}, nice to meet you!`)
	};
};

callName ();