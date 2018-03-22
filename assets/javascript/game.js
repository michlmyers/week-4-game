//GAME RESET FUNCTION WILL GENERATE NEW COMPUTER SCORE, NEW RANDOM PIC NUMBERS, AND CLEAR USER SCORE

// CREATE VARIABLE COUNTER
var winCount = 0;
var lossCount = 0;

var compNumber, numRock1, numRock2, numRock3, numRock4, userScoreCounter;

// LOAD
$(document).ready(function () {

  //THIS SHOULD BE MY RANDOM NUMBER FUNCTIONS AT GAME START AND CLEAR 
  // Generate computer random between 19-120 and assign to a variable

  //this line starts the "New Game" function
  function newGame() {

    compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    numRock1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    numRock2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    numRock3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    numRock4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    userScoreCounter = 0;

    // TEST AND DEBUG
    console.log(numRock1);
    console.log(numRock2);
    console.log(numRock3);
    console.log(numRock4);
    console.log("This is the comp number: " + compNumber);

    // Placing computer number over section
    $('#cpuScore').text(compNumber);
    $('#userScore').text(userScoreCounter);
  }//this line ends the "New Game" function

  // This calls the new game function. 
  newGame();

  // ----------------------------------------------------------------------------------------------------------
  //USER CLICKS IMAGE BUTTONS TO ADD TO THEIR SCORE COUNTER
  //USER SCORE UPDATES WITH NUMBERS FROM PIC/BUTTONS AND DISPLAYS TOTAL

  // ------------------------------------------------------------------------------

  // First image click + add
  $("#rock1").on("click", function () {
    userScoreCounter += numRock1;
    // Placing user count over section
    $('#userScore').text(userScoreCounter);

    checkScore()

    // TEST AND DEBUG
    console.log("Crystal image 1 clicked x: " + userScoreCounter)
  });

  // ------------------------------------------------------------------------------

  // Second image click + add
  $("#rock2").on("click", function () {
    userScoreCounter += numRock2;
    // Placing user count over section
    $('#userScore').text(userScoreCounter);

    checkScore()

    // TEST AND DEBUG
    console.log("Crystal image 2 clicked x: " + userScoreCounter)
  });

  // ------------------------------------------------------------------------------

  // Third image click + add
  $("#rock3").on("click", function () {
    userScoreCounter += numRock3;
    // Placing user count over section
    $('#userScore').text(userScoreCounter);

    checkScore()

    // TEST AND DEBUG
    console.log("Crystal image 3 clicked x: " + userScoreCounter)
  });

  // ------------------------------------------------------------------------------

  // Fourth image click + add
  $("#rock4").on("click", function () {
    userScoreCounter += numRock4;
    // Placing user count over section
    $('#userScore').text(userScoreCounter);

    checkScore();

    // TEST AND DEBUG
    console.log("Crystal image 4 clicked x: " + userScoreCounter)
  });

  function checkScore(){
    if (userScoreCounter > compNumber) {
      alert("Bummer, you've been cursed!");
      lossCount++;
      $('#playerLoss').text("LOSE: " + lossCount);
      console.log("Player lost");
      newGame();
    } else if (userScoreCounter == compNumber) {
      alert("Yeah dawg, you won!");
      winCount++;
      $('#playerWin').text("WIN: " + winCount);
      console.log("Player won");
      newGame();
    }
  }
  // ----------------------------------------------------------------------------------------------------------

  //IF USER SCORE EQUALS COMPUTER SCORE EXACTLY USER WIN COUNTER INCREASE BY 1 AND GAME RESETS
  //IF USER SCORE GOES ABOVE COMPUTER SCORE USER LOSS COUNTER INCREASES BY 1 AND GAME RESETS

  // *************NEXT STEPS MIKE - CREATE WIN / LOSS DIVS*********************** 
  // *************CREATE GAME CLEAR / RESET FUNCTIONS WHEN***********************

});
