// Assignment Code

//Generate functions for uppercase, lowercase, numbers and symbols

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[0];
}


//prompt users to choose
var charHowMany = prompt("How many characters would you like your pw to be?");
var charLower = prompt("Would you like to include lowercase letters?");
var charUpper = prompt("Would you like to include uppercase letters? ");
var charSymbols = prompt("Would you like to include special characters?");

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

