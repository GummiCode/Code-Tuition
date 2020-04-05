// Arrays

let names = [`John`, `Mark`, `Jane`];
let birthYears = [1990, 1969, 1948];

console.log(names);
console.log(names[0]);
console.log(names.length);


//Mutating values in arrays

names[1] = `Ben`;

console.log(names[1]);


//adding values to an array

names[3] = `Mary`;
console.log(names);

names[5] = `Sven`;
console.log(names);


//----------------------




let johnData = [`John`, `Smith`, 1990, `teacher`, false];
console.log(johnData);


//.ush: Add value to end of array.

johnData.push(`blue`);
console.log(johnData);

//.unshift: Add value to the start fo the array.

johnData.unshift(`Mr`);
console.log(johnData);

//.pop: removes the last value of the array.

johnData.pop();
console.log(johnData);
johnData.pop();
console.log(johnData);

//.shift: removes the first value of the array.

johnData.shift();
console.log(johnData);

//.indexOf: Returns the index of the element used.
// It returns -1 if the element is not in the array, and so oit can be used to check if an element is present.

console.log(johnData.indexOf(1990));
console.log(johnData.indexOf(`designer`));

let isDesigner = johnData.indexOf(`designer`) === -1 ? `John is not a designer` : `John is a designer`; 

console.log(isDesigner);


/* Challenge 2!

Sven has a bill of 3 items:

£124
£48
£268


He tips according to the cost of the items on the bill:

20%  for price < £50
15% for price $50 to £200
10% for price > £200

MAke a calculator that will return two arrays:
One containing the three tip values for each item,
One containing the individual price + tip cost of each item.
*/



let tipCalc = (charge) => {
	switch (true) {
		case charge < 50:
			return charge * .2;
			break;
		case charge >= 50 && charge <= 200:
			return charge * .15;
			break;
		case charge > 200:
			return charge * .1;
			break;
		default:
			return 0;
			break;

	}
};

let totalCalc = (charge) => {return tipCalc(charge) + charge};

/*These two phrases were tests. They worked.

console.log (tipCalc(5));
console.log (totalCalc(5));

*/


let billArray = (cost1, cost2, cost3) => {
	return 	[tipCalc(cost1),
			 tipCalc(cost2), 
			 tipCalc(cost3)]; 
};

let billTipArray = (cost1, cost2, cost3) => {
	return 	[totalCalc(cost1), 
			 totalCalc(cost2),
			 totalCalc(cost3)];

};

let bill = [124, 48, 268];

console.log(bill[1]);

console.log (billArray(bill[0], bill[1], bill[2]));
console.log (billTipArray (bill[0], bill[1], bill[2]));

//It ain't concise but it works!

bill = [20, 60, 300];

console.log (billArray(bill[0], bill[1], bill[2]));
console.log (billTipArray (bill[0], bill[1], bill[2]));



// It's useful to know that you can put arrays in arrays as well :3