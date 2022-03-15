// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// make var arrays for each user input, populate rondomly while num is < given val, add them to arrays, then randomize

function generatePassword(userlower=3, userupper, usernumb=3, userchar=3, userlength=3){
  let finalPassword = [];
  let orderedPassword = [];
  const capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowLetter = "abcdefghijklmnopqrstuvwxyz";
  const numbs = "0123456789";
  const symbols = "!@#$%^&*()?";
  let passwordLength = 8;


  while (orderedPassword.length < passwordLength){
    orderedPassword.push(capLetter[Math.floor(Math.random() * capLetter.length)]);


  }
  // orderedPassword.push(numbs[1]);
  // orderedPassword.push(symbols[1]);
  while (finalPassword.length < passwordLength){
    var randomIndex = Math.floor(Math.random() * orderedPassword.length);
    finalPassword.push(orderedPassword[randomIndex]);
    orderedPassword.splice(randomIndex, 1);
  }


    return finalPassword.join("");

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
