var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];


var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*6)];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

/*TODO: Delete note once understood.
 The function below iteratively selects the "square" node module from the node array at the first index position and onwards (so the ".square" node from the first incidence of ".square" in the HTML"), selects its backgroundColor property in the stylesheet, and assigns it a value equal to the color text from the "colors" array above in the same index position "i".

So the first .square is given backgroundColour equal to the first colour in the colors array,
the second is given the second,
and so forth. */

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {

        //grab color of cliked square
        var clickedColor = this.style.backgroundColor;

        //compare color to picked color
        if (clickedColor === pickedColor) {
            alert("Correct!");
            //Shuffle colors;
        } else {
            alert("Wrong!");
        };
    });
};



