
var words = ["blackjack", "casino", "martini", "deck", "dealer", "nevada", "royalflush", "cocaine", "gamble", "stripper", "chips", "jackpot", "lucky", "elvis"]

var secretWord = words[Math.floor(Math.random() * words.length)];

var secretArray = Array.from(secretWord)

var blankWordSpaces = ""

var alreadyGuessed = []

var guessesLeft = 6

var wins = 0


for (var i = 0; i < secretArray.length; i++) {
		blankWordSpaces = blankWordSpaces + "_ "
      }

document.getElementById("wordSpaces").innerHTML = blankWordSpaces;
console.log(secretArray);




document.onkeyup = function(event) {
	var userGuess = event.key;
	// guessesLeft = guessesLeft - 1
	

	if (alreadyGuessed.indexOf(userGuess) > -1) {
		return
	}
	
	if (secretArray.indexOf(userGuess) === -1) {
		guessesLeft = guessesLeft -1;
		document.getElementById("guessesRemaining").innerHTML = guessesLeft;
	}


	alreadyGuessed.push(userGuess)
	document.getElementById("lettersAlreadyGuessed").innerHTML = alreadyGuessed;

    function wordSpacesString(alreadyGuessed,secretArray) {
    	console.log("already guessed: " + alreadyGuessed)
    	console.log("secretArray: " +secretArray)
    	var out = "" 
		for (var i = 0; i < secretArray.length; i++) {
			if (alreadyGuessed.indexOf(secretArray[i]) > -1) {
				out = out + secretArray[i]
			}
			else {
				out = out + " _"
			}
		}

		return out
	}

	document.getElementById("wordSpaces").innerHTML = wordSpacesString(alreadyGuessed, secretArray)

	if (wordSpacesString(alreadyGuessed, secretArray) === secretWord) {
		
		alert("You guessed it!");
		
		secretWord = words[Math.floor(Math.random() * words.length)];
		
		secretArray = Array.from(secretWord);
		
		blankWordSpaces = "";
		
		for (var i = 0; i < secretArray.length; i++) {
			blankWordSpaces = blankWordSpaces + "_ ";
		}		
		
		document.getElementById("wordSpaces").innerHTML = blankWordSpaces;
		
		document.getElementById("lettersAlreadyGuessed").innerHTML = "none"
		alreadyGuessed = [];
		
		wins = wins + 1;
		
		document.getElementById("winsCount").innerHTML = ("Wins: " +wins);
		
		// document.getElementById("lettersAlreadyGuessed").innerHTML = alreadyGuessed;
		
		guessesLeft = 6;
		
		document.getElementById("guessesRemaining").innerHTML = guessesLeft;
	}
	
	if (guessesLeft === 0) {
		alert("Oh no! You lost")

		secretWord = words[Math.floor(Math.random() * words.length)];
		
		secretArray = Array.from(secretWord);
		
		blankWordSpaces = "";
		
		for (var i = 0; i < secretArray.length; i++) {
			blankWordSpaces = blankWordSpaces + "_ ";
		}		
		
		document.getElementById("wordSpaces").innerHTML = blankWordSpaces;
		
		document.getElementById("lettersAlreadyGuessed").innerHTML = 'none';

		alreadyGuessed = [];
		
		// document.getElementById("lettersAlreadyGuessed").innerHTML = alreadyGuessed;
		
		guessesLeft = 6;
		
		document.getElementById("guessesRemaining").innerHTML = guessesLeft;		
	}

	
}
