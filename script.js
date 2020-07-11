// Assignment Code

//DOM elemnts
var resultsEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");


var randomPw = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumbers,
  symbols: getRandomSymbols,
};

//Generate functions for uppercase, lowercase, numbers and symbols

function getRandomLower() {
@@ -10,30 +27,43 @@ function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
function getRandomSymbols() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[0];
}


//prompt users to choose
var charHowMany = prompt("How many characters would you like your pw to be?");
var charLower = prompt("Would you like to include lowercase letters?");
var charUpper = prompt("Would you like to include uppercase letters? ");
var charSymbols = prompt("Would you like to include special characters?");


  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
