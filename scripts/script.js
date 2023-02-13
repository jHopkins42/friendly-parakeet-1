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

//attempt2 at using radio buttons to make a complex password (merging 2 simple passwords into one displayed password)
//form.addEventListener("complexity", (event) => {
//  const data = new FormData(form);
//  let output = "";
//  for (const entry of data) {
//    output = '$(output)$entry[0]}=$(entry[1]}\r';
//  }
//  log.innerText = output;
//  event.preventDefault();
//},
//false
//);
//console.log()

//attempt3 at using radio buttons to make a complex password (merging 2 simple passwords into one displayed password)
//$('input[type="radio"]').change(function(){
  //var $yes = $('input[type="radio"][value="Yes"]');
  //if ($yes.filter('checked').length === $yes.length) {
    //$('next').attr('disabled',false);
  //} else {
    //$('next').attr('disabled', true);
  //}
//});

/* attempt 1 and 4 of using a radio id button
if(document.getElementById('simple').checked {
  document.getElementById("simple it is").ariaValueText;
} else {
  document.write("Complex it is");
} */

/* version 6 of input function
if (getElementById(simple) = checked) {
  document.getElementById("Simple it is");
} else if (getElementById.complex = true) {
  document.getElementById("Complex it is");
 } else {
  document.getElementById("");
}  */

//function: if complexity is yes (simple), then password is simple and only runs one algorithym of lowercase and symbols.
//else: if complexity is no (complex) then password runs complex meaning two algorithyms, all variable types, and 20 characters concotonated together.

//if (complexity = yes)


/* var passwordSimple=document.getElementById("passwordSimple");
var passwordComplex=document.getElementById("passwordComplex");

function genPassword() {
  var passwordLength = 10;
  var password = "";
for (var i=0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  passwordSimple += chars.substring(randomNumber, randomNumber +1);
}
  document.getElementById("passwordSimple").value = password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log  (password)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  let characters = lowerLetters;
  passwordText.value = genPassword(length.value, characters);
};
*/


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


function generatePassword (){
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
