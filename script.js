var generateBtn = document.querySelector("#generate");


//Main function to generate the password according to the criteria
function generatePassword(numbers, charLowerCase, charUpperCase, symbols) {

  //Password variables
  var numbers = ["0123456789"];
  var charLowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var charUpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var symbols = ["!#$%&/?@(){}=-"];
  
  var createdPassword = [];

  ///////////NUMBERS////////// 
  var confirmNumbers = confirm("Do you want numbers in your password?");
  var hasNumbers = confirmNumbers;

  //Will add the numbers into the createdPassword
  if (hasNumbers) {
    console.log("The password has numbers!");
    createdPassword += numbers[Math.floor(Math.random() * numbers.length)];
    console.log(createdPassword);
  }


  ///////////UPPERCASE LETTERS////////////
  var confirmUpperCase = confirm("Do you want uppercase letter in your password?");
  var hasUpperCase = confirmUpperCase;

  //Will add the uppercase letter to createdPassword
  if (hasUpperCase) {
    console.log("The password has uppercase letters!");
    createdPassword += charUpperCase[Math.floor(Math.random() * charUpperCase.length)];
    console.log(createdPassword);
  }


  ////////////LOWERCASE LETTERS//////////////
  var confirmLowerCase = confirm("Do you want lowercase letter in your password?");
  var haslowerCase = confirmLowerCase;

  //Will add the lowercase letters to createdPassword
  if (haslowerCase) {
    console.log("The password has lowercase letters!");
    createdPassword += charLowerCase[Math.floor(Math.random() * charLowerCase.length)];
    console.log(createdPassword);
  }


  ///////////SYMBOLS////////////
  var confirmSymbols = confirm("Do you want special characters (eg. @, &, $, etc.) in your password?");
  var hasSymbols = confirmSymbols;

  //Will add the symbols to createdPassword
  if (hasSymbols) {
    console.log("The password has special characters!");
    createdPassword += symbols[Math.floor(Math.random() * symbols.length)];
    console.log(createdPassword);
  }


  //////////PASSWORD LENGTH///////////
  //I couldn't get the prompt input to be the password length but in the next submit I'll fix it.

  // var promptLength = prompt("How many characters do you want your password to have?");
  // var inputLength = promptLength;

  // function passwordLength(createdPassword) {
  //   console.log("Your password has " + inputLength + " characters.");
    
  // }

  return createdPassword
}

// Function for the button eventlistener
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Eventlistener for the button to start the whole process
generateBtn.addEventListener("click", writePassword);

