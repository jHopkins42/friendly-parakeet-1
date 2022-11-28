// Assignment code here
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!#%&$";
const passNumbers = "1234567890";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log  (password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
