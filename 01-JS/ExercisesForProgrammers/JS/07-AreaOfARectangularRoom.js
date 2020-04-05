//let width = prompt (`Please enter the width of the room in feet.`)
//let length = prompt (`Please enter the length of the room in feet.`)



const calculateArea = (width, length) => {

	const roomArea = {
			feet:	width*length,
			metres:	parseFloat((width*length*0.09290304).toFixed(8)),
	};

	return roomArea;

};

module.exports = calculateArea;
