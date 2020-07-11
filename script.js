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
// Write password to the #password input
function writePassword() {
  
  var length = +lengthEl.value;
  var isLower = lowercaseEl.checked;
  var isUpper = uppercaseEl.checked;
  var isNumber = numbersEl.checked;
  var isSymbol = symbolsEl.checked;

  resultsEl.innerText = generatePassword(isLower,isUpper, isNumber, isSymbol);

}

function generatePassword (lower, upper, number, symbols,length) {
// start pw var
//filter the unchecked
//loop over lengh of call generator function 
//add final pw and return

var generatedPassword = "";

var typesCount = lower + upper + number + symbols;

var typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0]);


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

