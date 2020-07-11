// Assignment Code

//prompt users to choose
var charHowMany = prompt ("How many characters would you like your pw to be?");
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


var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  generatePassword += 

  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);