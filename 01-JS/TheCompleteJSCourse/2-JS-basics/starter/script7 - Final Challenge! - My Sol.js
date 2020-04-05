
//John's Tipping Calculator

const JohnBillCalculator = {
	bills: [124, 48, 268, 180, 42],
	tip50: 0.2,
	tip200: 0.15,
	tipPlus200: 0.1,
	tipList: [],
	billList: [],
	tipCalc: function() {
		for (let i = 0; i <this.bills.length; i++ ) {
			
			
		switch(true) {
		case this.bills[i]<50:
			this.tipList.push(this.bills[i] * this.tip50);
			break;

		case this.bills[i]> 200:
			this.tipList.push(this.bills[i] * this.tipPlus200);
			break;


		default:
			this.tipList.push(this.bills[i] * this.tip200);
			break;
		}
		}
	},

	billCalc: function() {
		for (let i = 0; i < this.tipList.length; i++) {
			this.billList[i] = this.bills[i] + this.tipList[i];
		}
		}
	};

console.log(JohnBillCalculator)

JohnBillCalculator.tipCalc();
JohnBillCalculator.billCalc();

console.log(JohnBillCalculator);



// Mark's Tipping Calculator

const MarkBillCalculator = {
	bills: [77, 375, 110, 45],
	tip100: 0.2,
	tip300: 0.1,
	tipPlus300: 0.25,
	tipList: [],
	billList: [],
	tipCalc: function() {
		for (let i = 0; i <this.bills.length; i++ ) {
			
		switch(true) {
		case this.bills[i]<50:
			this.tipList.push(this.bills[i] * this.tip100);
			break;

		case this.bills[i]> 200:
			this.tipList.push(this.bills[i] * this.tipPlus300);
			break;


		default:
			this.tipList.push(this.bills[i] * this.tip300);
			break;
		}
		}
	},
	billCalc: function() {
		for (let i = 0; i < this.tipList.length; i++) {
			this.billList[i] = this.bills[i] + this.tipList[i];
		}
		}
	};

console.log(MarkBillCalculator)

MarkBillCalculator.tipCalc();
MarkBillCalculator.billCalc();

console.log(MarkBillCalculator);


//Average Tip Calculator Function

const arrayAverage = (arrayName) => {
	let arraySum = 0;
	for (let i = 0; i <arrayName.length; i++) {
		arraySum = arraySum + arrayName[i]};
	return arraySum / arrayName.length;
};


//Average Tip Comparison Switch

switch (true){
	case (arrayAverage(MarkBillCalculator.tipList) === arrayAverage(JohnBillCalculator.tipList)):
		console.log (`John and Mark paid the same average tip of ${arrayAverage(MarkBillCalculator.tipList)}! What a coincidence!`);
		break;
	case (arrayAverage(MarkBillCalculator.tipList) > arrayAverage(JohnBillCalculator.tipList)):
		console.log(`Mark paid a higher average tip than John. Mark's average tip was ${arrayAverage(MarkBillCalculator.tipList)}.`);
		break;
	case (arrayAverage(MarkBillCalculator.tipList) < arrayAverage(JohnBillCalculator.tipList)):
		console.log(`John paid a higher average tip than Mark. John's average tip was ${arrayAverage(JohnBillCalculator.tipList)}.`);
		break;
	default:
		break;
	};


/* Testing the array average calculator
	
let testArray = [1, 3, 5]

console.log(arrayAverage(testArray));

console.log(arrayAverage(testArray));

*/
