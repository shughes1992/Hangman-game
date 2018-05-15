//possible marioKart racers

var racers = ['yoshi', 'boo', 'isabella', 'wario', 'luigi', 'ludwig', 'iggy', 'bowser'];

//computer chooses a racer randomly

var currentRacers = racers[Math.floor(Math.random() * racers.length)]; 

// view console to see the racer the cptr chose
console.log("correct word to guess " + currentRacers);


// global variables

var wins = 0;
var guessesLeft = 10;

//empty array to store guesses

var guessesArray = [];

//the number of letters for the racer is displayed like this "_ _ _ _"


//underscore for every letter in the word- loop through the word & create an underscore for every letter which changes the HTML

for (var i; i = racers.length ;)

//player guesses a letter (.onKeyup)

document.onkeyup = function (event) {  

var guessedLetter = event.key;
console.log("player's guessed letter " + guessedLetter);
document.getElementById("word").innerHTML = guessedLetter;
}


// the guessedLetter is compared to the computer's word

    // if guessedLetter = computer's letter

        // letter populates the "_ _ _" in the correct place

        //

    // if guessedLetter != to computer's letter

        // incorrect letter is displayed in guessedLetters

        //guessesRemaining subtracts by 1


//player gets 10 guesses to guess the word

    //if guessesLeft = 0

        //computer chooses new racer

        //guessesLeft reset back to 10

        //game resets


// if player guesses the correct word

    //image of racer is displayed

    //Wins increases by 1

    //game resets


