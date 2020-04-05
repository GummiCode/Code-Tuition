///////////////////////////////////////
// Lecture: Hoisting


//Hoisting functions

// The below is an example of a function declaration.
//In this format, the function can be hoisted:
//it can be called earlier in the code than th function itself.


calcAge(1990);

function calcAge (year) {
    console.log(2020-year)};


//The below is an example of a function expression.
//In this format, hoiting does not work.

//retirementA(1990);

let retirementA = function(year) {
    console.log (70 - (2020 - year))};

retirementA(1990);


//Arrow syntax also gives a function expression,
//in which hoisting does not work.

//retirementB(1990);

let retirementB = (year) => 
    console.log (70 - (2020 - year))

retirementB(1990);




// Hoisting Variables

//If you use var then standard variables, like that below,
//are hoisted during hoisted.
//However when initially hoisted they're set to undefined.
//So the variables are stored, but values aren't assigned.
//As such, calling them before they're given a value
//simply returns 'undefined'.

console.log(age);

var age = 23;

//There's more to var than this (see lecture 39)
//but we won't look at this just now, because...


//HOWEVER WE DO NOT USE VAR.
//And it's precisely for this reason!
//Thins that are hoisted have global scope.
//And letting variables have global scope
//can really confuse things.
//For example, if function uses the same variable names
//as a var, the global var and the function's
//local variable may interfere. What a mess!

//Using let or const, hoisting does not work.
//That's why they're great to use!
//Code hygeine is good!

let mumAge = 60;
console.log(mumAge);

const dadAge = 70;
console.log(dadAge);












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









