let people, pizzas, pieces;

const valuePrompt = function (phrase) {
	let param;
	while (isNaN(param)) {
	param = parseInt(prompt (phrase));
	return param;
	};
};

people = valuePrompt(`How many people want pizza? Enter a number.`);

pizzas = valuePrompt(`How many pizzas do you have? Enter a number.`);

pieces = valuePrompt(`How many pieces does each pizza have? Enter a number.`);

let piecesEach = Math.floor((pieces*pizzas)/people);
let leftovers = (pieces*pizzas)%people;

alert(`Each person gets ${piecesEach} pieces of pizza ^__^
There are ${leftovers} pieces left over.`);