// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {
  var pass = "";
  var lowerCasePass = "abcdefghijklmnopqrstuvwxyz";
  var upperCasepass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "`~!@#$%^&*-_+=?";
  var combined = lowerCasePass + upperCasepass + specialChar;
  console.log(combined);

  for (i = 1; i <= 8; i += 1) {
    var randomIndex = Math.floor(Math.random() * combined.length);
    var gen = combined.charAt(randomIndex);
    console.log(gen);
    pass = pass + gen;
  }
  return pass;
};

// generatePassword();
// use confirm for selection / maybe concact to giant string or giant array. charAt(randomIndex)

// var lowerLetter = "ABCDEFGH" - use chartAt() + concats
// var upperCase =
// var specialChar =
// if specialChar =
