// Assignment Code

//prompt users to choose
var userInput = prompt("How many characters would you like your pw to be?");
var charLower = confirm("Would you like to include lowercase letters?");
var charUpper = confirm("Would you like to include uppercase letters?");
var charSymbols = confirm("Would you like to include special characters?");
var symbols = '!@#$%^&*(){}[]=<>/,.';
var numbers = '0123456789'
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVW'
var selected = '';


//Need to genearte pw based on selection

//If then statements to filter through confirm selection
if (charLower){ 
//add string charLower to total characterCount
 selected = selected + lowerLetters;
}
if (charUpper){
 selected = selected + upperLetters
}
if (charSymbols){
selected = selected + symbols
}



// generate the pw into the input box
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var passwordResult = '';
	for (var i =0; i < userInput; i++); {
passwordResult = passwordResult + selected[Math.floor(Math.random()*selected.length)];
}

  document.querySelector("#password").innerHTML = passwordResult;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);