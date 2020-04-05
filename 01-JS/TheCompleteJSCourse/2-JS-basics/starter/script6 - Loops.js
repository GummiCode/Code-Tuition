// Loops and Iteration


// the FOR Loop


for (let i = 0; i < 10; i++) {
	console.log(i)
}

/* 	the first phrase states the initial state,
	the second phrase states the condition under which the loop continues;
	the third states what change is made at the end of each loop;
	and the fourth states what additional actions must be taken on each loop.

	Once the second phrase no longer applies, the loop ends.

	*/

const john = [`John`, `Smith`, 1990, `designer`, false];

for (let i = 0; i <john.length; i++ ) {
		console.log(john[i]);
}




// The WHILE loop

let j = 0;

while (j < john.length) {
		console.log(john[j]);
			j++;
};

/* The WHILE loop is like the FOR loop,
but it only has two phrases:
	 the loop condition,
	 and the operation to perform on each loop.
As such, if you want to include a start condition it must be defined outside of the loop.
*/



//Continue

//Continue is used to stop an iteration in its tracks and skip forward to the next iteration.

for (k = 0; k < john.length; k++) {
	if (typeof john[k] !==	`string`) continue; 
	console.log(john[k]); 
};

//The example above skips values that are not strings.




//Break

//Break ceases the entire loop when a condition is met.

for (k = 0; k < john.length; k++) {
	if (typeof john[k] !==	`string`) break; 
	console.log(john[k]); 
};




//Mini-challenge: Loop through array backwards!


for (let l = john.length-1; l >= 0; l--) {
	console.log(john[l]);
};





// Challenge!

