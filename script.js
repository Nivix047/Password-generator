// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var getRandomChar = function (str) {
  var randomIndex = Math.floor(Math.random() * str.length);
  return str.charAt(randomIndex);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {
  var pass = "";
  var num = "0123456789";
  var lowerCasePass = "abcdefghijklmnopqrstuvwxyz";
  var upperCasepass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var combined = "";

  var passLength = prompt(
    "How long do you want your password (min = 8, max = 128)"
  );
  if (passLength >= 8 && passLength <= 128) {
    var confirmNum = confirm("Do you want to include numbers?");

    var confirmLowers = confirm("Do you want to include lower case?");

    var confirmUppers = confirm("Do you want to include upper case?");

    var confirmSpecial = confirm("Do you want to include special characters?");
  } else alert("Your password must be at least 8 - 128 characters long");
  {
  }

  if (confirmNum === true) {
    combined += num;
    pass += getRandomChar(num);
  }

  if (confirmLowers === true) {
    combined += lowerCasePass;
    pass += getRandomChar(lowerCasePass);
  }

  if (confirmUppers === true) {
    combined += upperCasepass;
    pass += getRandomChar(upperCasepass);
  }

  if (confirmSpecial === true) {
    combined += specialChar;
    pass += getRandomChar(specialChar);
  }

  if (passLength < 8) {
    return;
  }

  if (passLength > 128) {
    return;
  }

  if (!confirmSpecial && !confirmLowers && !confirmUppers && !confirmNum) {
    alert(
      "You need to pick at least 1 character type (numbers, uppercase, lowercase, or special)"
    );
    return;
  }
  var remaining = passLength - pass.length;

  for (var i = 1; i <= remaining; i += 1) {
    pass += getRandomChar(combined);
    console.log(i);
  }
  return pass;
};
