// Assignment Code

//prompt users to choose
var userInput = prompt ("How many characters would you like your pw to be?");
var charLower = confirm("Would you like to include lowercase letters?");
var charUpper = confirm("Would you like to include uppercase letters? ");
var charSymbols = confirm("Would you like to include special characters?");

//Generate functions for uppercase, lowercase, numbers and symbols

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbols() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[0];
}

//Need to genearte pw based on selection
//If then statements to filter through confirm selection
if (charLower){
  return getRandomLower;
}
else if (charUpper){
  return getRandomUpper;
}
else if (charSymbols){
  return getRandomSymbols;
}

// Use Userinput # characters to determine the length of the password
function pwLength () {
  
}

function generatePassword (){

  
}
// generate the pw into the input box
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var generatePassword += passwordText;

  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);