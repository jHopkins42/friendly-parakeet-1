// Assignment code here
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!#%&$";
const passNumbers = "1234567890";

const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const complexity = document.getElementById("complexity")

const form = document.querySelector("form");
const log = document.querySelector("#log");
var generateBtn = document.querySelector("#generate");
var possibleCharacters = "";

function writePassword(answerLength) {
  console.log(answerLength)
  var returnedPassword = "Your random Password is ";
  for (let i = 0; i < answerLength; i++) {
    //math
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
    returnedPassword += possibleCharacters.substring(randomNumber, randomNumber +1);  
  }
 
  if (complexity != true) {
    for (let i = 0; i < answerLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
    returnedPassword += possibleCharacters.substring(randomNumber, randomNumber +1); 
    }
  } else {
    console.log(returnedPassword)
  }

  alert(returnedPassword)
  return returnedPassword
  console.log(returnedPassword.length)
}


function generatePassword(){
  console.log ("click");

  var answerUpper = window.confirm ("Include upper case?")
  var answerLower = window.confirm ("Include lower case?")
  var answerSpecial = window.confirm ("Include special characters?")
  var answerNumbers = window.confirm ("Include numbers?")
  var answerLength = window.prompt ("how long is the password?")
  
  if (answerUpper) {
    possibleCharacters = capitalLetters
   }
   if (answerLower) {
    possibleCharacters += lowerLetters
   }
    if (answerSpecial) {
      possibleCharacters += specialCharacters
    }
   if (answerNumbers) {
    possibleCharacters += passNumbers
   }
   if (complexity == true) {
    var double = "yes"
   } else {
    var double = "no"
   }
   
   
    console.log (possibleCharacters)
    console.log (answerLength)
   var password = writePassword(answerLength)
   console.log (password)
  };


generateBtn.addEventListener("click",generatePassword)
