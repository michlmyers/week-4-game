//USER SCORE UPDATES WITH NUMBERS FROM PIC/BUTTONS AND DISPLAYS TOTAL
//IF USER SCORE EQUALS COMPUTER SCORE EXACTLY USER WIN COUNTER INCREASE BY 1 AND GAME RESETS
//IF USER SCORE GOES ABOVE COMPUTER SCORE USER LOSS COUNTER INCREASES BY 1 AND GAME RESETS
//GAME RESET FUNCTION WILL GENERATE NEW COMPUTER SCORE, NEW RANDOM PIC NUMBERS, AND CLEAR USER SCORE

// CREATE VARIABLE COUNTER
var userScoreCounter = 0;

// LOAD
$(document).ready(function() {

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

// Place random numbers with each button image
// numRock1

//USER CLICKS IMAGE BUTTONS TO ADD TO THEIR SCORE COUNTER
$("#rock1").on("click", function() {
userScoreCounter += numRock1;  
// Placing user count over section
$('#userScore').text(userScoreCounter);
// TEST AND DEBUG
console.log("I'm working");
console.log("Crystal image 1 clicked x: " + userScoreCounter)});

$("#rock2").on("click", function() {
userScoreCounter += numRock2;  
// Placing user count over section
$('#userScore').text(userScoreCounter);
// TEST AND DEBUG
console.log("I'm working");
console.log("Crystal image 2 clicked x: " + userScoreCounter)});

$("#rock3").on("click", function() {
userScoreCounter += numRock3;  
// Placing user count over section
$('#userScore').text(userScoreCounter);
// TEST AND DEBUG
console.log("I'm working");
console.log("Crystal image 3 clicked x: " + userScoreCounter)});

$("#rock4").on("click", function() {
userScoreCounter += numRock4;  
// Placing user count over section
$('#userScore').text(userScoreCounter);
// TEST AND DEBUG
console.log("I'm working");
console.log("Crystal image 4 clicked x: " + userScoreCounter)});


});
