//USER CLICKS BUTTONS TO ADD TO THEIR SCORE
//USER SCORE UPDATES WITH NUMBERS FROM PIC/BUTTONS AND DISPLAYS TOTAL
//IF USER SCORE EQUALS COMPUTER SCORE EXACTLY USER WIN COUNTER INCREASE BY 1 AND GAME RESETS
//IF USER SCORE GOES ABOVE COMPUTER SCORE USER LOSS COUNTER INCREASES BY 1 AND GAME RESETS
//GAME RESET FUNCTION WILL GENERATE NEW COMPUTER SCORE, NEW RANDOM PIC NUMBERS, AND CLEAR USER SCORE


// LOAD
$(document).ready(function() {

// CREATE GLOBAL VARIABLES
var userScoreCounter = 0;
// Generate computer random between 19-120 and assign to a variable
var compNumber = Math.floor(Math.random() * (120 - 19 +1)) + 19;
// Generate random numbers between 1 and 12 for each button image
var numRock1 =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var numRock2 =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var numRock3 =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var numRock4 =  Math.floor(Math.random() * (12 - 1 + 1)) + 1;


// TEST AND DEBUG
console.log(numRock1);
console.log(numRock2);
console.log(numRock3);
console.log(numRock4);
console.log("This is the comp number: " + compNumber);

// MAIN GAMEPLAY FUNCTIONs

// Placing computer number over section
$('#cpuScore').text(compNumber);
    

//TESTING TO MAKE SURE MY BUTTON CLICKS WORK
$(".images").on("click", function() {
alert("I'm an image and I've been clicked!");
console.log("I'm working");
});

//CALLING THE FUNCTION TO RUN THE GAME****************************************************************    

});