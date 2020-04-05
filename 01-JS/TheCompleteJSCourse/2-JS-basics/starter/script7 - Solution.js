/* This is the solution from the course. Somewhat neater than mine!
*/


let john = {
	fullName: `John Smith`,
	bills: [124,48, 268, 180, 42],
	calcTips: function () {
		this.tips=[];
		this.finalValues=[];

		for (let i = 0;  i < this.bills.length; i++) {
			let percentage;
			const bill = this.bills [i];

			if (bill < 50) {percentage=.2;}
			else if (bill >=50 && bill <=200) {percentage=.15;}
			else {percentage = .1;}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}

}

john.calcTips();
console.log(john);


let mark = {
	fullName: `Mark Smith`,
	bills: [77, 475, 110, 45],
	calcTips: function () {
		this.tips=[];
		this.finalValues=[];

		for (let i = 0;  i < this.bills.length; i++) {
			let percentage;
			const bill = this.bills [i];

			if (bill < 100) {percentage=.2;}
			else if (bill >=100 && bill <=300) {percentage=.1;}
			else {percentage = .15;}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}

}

mark.calcTips();
console.log(mark);


// The next bit, the course did exactly the same way as me ^__^
//Average Tip Calculator Function

const arrayAverage = (arrayName) => {
	let arraySum = 0;
	for (let i = 0; i <arrayName.length; i++) {
		arraySum = arraySum + arrayName[i]};
	return arraySum / arrayName.length;
};


//The course has a dryer solution for this.
//Average Tip Comparison Switch


mark.average = arrayAverage(mark.tips);
john.average = arrayAverage(john.tips);

console.log(john, mark);

switch (true){
	case (mark.average === john.average):
		console.log (`John and Mark paid the same average tip of ${mark.average}! What a coincidence!`);
		break;
	case (mark.average > john.average):
		console.log(`Mark paid a higher average tip than John. Mark's average tip was ${mark.average}.`);
		break;
	case (mark.average < john.average):
		console.log(`John paid a higher average tip than Mark. John's average tip was ${john.average}.`);
		break;
	default:
		break;
	};

