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
  var num = "0123456789";
  var lowerCasePass = "abcdefghijklmnopqrstuvwxyz";
  var upperCasepass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var combined = "";
  console.log(combined);

  var passLength = prompt(
    "How long do you want your password (min = 8, max = 128)"
  );

  var confirmNum = confirm("Do you want to include numbers?");

  var confirmLowers = confirm("Do you want to include lower case?");

  var confirmUppers = confirm("Do you want to include upper case?");

  var confirmSpecial = confirm("Do you want to include special characters?");

  if (confirmNum === true) {
    combined += num;
  }

  if (confirmLowers === true) {
    combined += lowerCasePass;
  }

  if (confirmUppers === true) {
    combined += upperCasepass;
  }

  if (confirmSpecial === true) {
    combined += specialChar;
  }

  if (
    !confirmSpecial &&
    !confirmLowers &&
    !confirmUppers &&
    !confirmNum &&
    !confirmSpecial
  ) {
    alert(
      "You need to pick at least 1 character type (numbers, uppercase, lowercase, or special)"
    );
    return;
  }

  for (i = 1; i <= passLength; i += 1) {
    var randomIndex = Math.floor(Math.random() * combined.length);
    var gen = combined.charAt(randomIndex);
    console.log(gen);
    pass = pass + gen;
  }
  if (confirmLowers === true) {
    if (/[a-z]/.test(pass) === false) {
      generatePassword();
    }
  }
  if (confirmUppers === true) {
    if (/[A-Z]/.test(pass) === false) {
      generatePassword();
    }
  }

  if (confirmNum === true) {
    if (/[0-9]/.test(pass) === false) {
      generatePassword();
    }
  }
  if (confirmSpecial === true) {
    if (/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(pass) === false) {
      generatePassword();
    }
  }
  return pass;
};
