// Assignment Code
var generateBtn = document.querySelector("#generate");
var numOfCharacters = prompt("How many characters would you like passwork to contain? Choose between 8 and 128.");
var specialCharacter = confirm("Click OK to include special characters.");
var numericCharacter = confirm("Click OK to include numeric characters.");
var lowercaseCharacter = confirm("Click OK to include lowercase letters.");
var uppercaseCharacter = confirm("Click OK to include uppercase letters.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
