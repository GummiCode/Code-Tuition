var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var ultraBtn = document.querySelector("#ultraBtn");


easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    ultraBtn.classList.remove("selected");
    //Set numSquares to 3
    numSquares=3;
    //Generate 3 random colors and assign them to the colors array
    colors = generateRandomColors(numSquares);
    //Pick a winning color
    pickedColor = pickColor();
    //Display the RGB of the pciked color
    colorDisplay.textContent = pickedColor;
    //Set the colors of the top three boxes to those in the colors array
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
    //Set the remaining boxes to hidden
            squares[i].style.display = "none";
        };
    };
    //reset the header color;
    h1.style.backgroundColor = "#232323";
    //Clear the 'Correct!/Try Again' text;
    messageDisplay.textContent = "";
    //reset the 'New Colors/Play Again?' button;
    resetButton.textContent = "New Colors";
});

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    ultraBtn.classList.remove("selected");
    //Set numSquares to 6
    numSquares=6;
    //Generate 6 random colors and assign them to the colors array
    colors = generateRandomColors(numSquares);
    //Pick a winning color
    pickedColor = pickColor();
    //Display the RGB of the pciked color
    colorDisplay.textContent = pickedColor;
    //Set the colors of the top three boxes to those in the colors array
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
    //Set the remaining boxes to hidden. Keeping this for Ultra mode.
            squares[i].style.display = "none";
        };
    };
    //reset the header color;
    h1.style.backgroundColor = "#232323";
    //Clear the 'Correct!/Try Again' text;
    messageDisplay.textContent = "";
    //reset the 'New Colors/Play Again?' button;
    resetButton.textContent = "New Colors";


});

/* ULTRA MODE
ultraBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    ultraBtn.classList.add("selected");
    //Set numSquares to 12
    numSquares=12;
    //Generate 12 random colors and assign them to the colors array
    colors = generateRandomColors(numSquares);
    //Pick a winning color
    pickedColor = pickColor();
    //Display the RGB of the picked color
    colorDisplay.textContent = pickedColor;
    //Set the colors of the top three boxes to those in the colors array
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";

        };
    };
    //reset the header color;
    h1.style.backgroundColor = "#232323";
    //Clear the 'Correct!/Try Again' text;
    messageDisplay.textContent = "";
    //reset the 'New Colors/Play Again?' button;
    resetButton.textContent = "New Colors";

});
*/

resetButton.addEventListener("click", function() {
    //reset the 'New Colors/Play Again?' button;
    resetButton.textContent = "New Colors";
    //Clear the 'Correct!/Try Again' text;
    messageDisplay.textContent = "";
    //reset the header color;
    h1.style.backgroundColor = "#232323";
    //generate new colors;
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    //chnage the colors of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    

});

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
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(pickedColor);
            h1.style.backgroundColor = clickedColor;
            //Shuffle colors;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        };
    });
};

function changeColors(color){
    //loop through all squares, change each color to match given color

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
};

    //pick the winning color from those in the colors array
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    //Make an array
    var arr = [];

    //add num random colors to array
    for (var i=0; i<num; i++) {

    //get a random colour and push it into the array
        arr.push(randomColor());
    };
    
    // return that array at the end.
    return arr;
};


function randomColor(){
    //pick a "red" from 0 to 255;
    var r = Math.floor(Math.random() * 256);
    //pick a blue;
    var g = Math.floor(Math.random() * 256);
    //pick a green;
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;


};