// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(userlower=3, userupper=3, usernumb=3, userchar=3, userlength=12){
  let finalPassword = [];
  let orderedPassword = [];
  let lowerpicked =[];
  let upperpicked =[];
  let numpicked = [];
  let charpicked = [];

  const capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowLetter = "abcdefghijklmnopqrstuvwxyz";
  const numbs = "0123456789";
  const chars = "!@#$%^&*()?";

  while (finalPassword.length < userlength && lowerpicked.length < userlower){
    lowerpicked.push(lowLetter[Math.floor(Math.random() * lowLetter.length)]);
  };

  while (finalPassword.length < userlength && upperpicked.length < userupper){
    upperpicked.push(capLetter[Math.floor(Math.random() * capLetter.length)]);
  };

  while (finalPassword.length < userlength && numpicked.length < usernumb){
    numpicked.push(numbs[Math.floor(Math.random() * numbs.length)]);
  };

  while (finalPassword.length < userlength && charpicked.length < userchar){
    charpicked.push(chars[Math.floor(Math.random() * chars.length)]);
  };
  
  orderedPassword.push.apply(orderedPassword, lowerpicked);
  orderedPassword.push.apply(orderedPassword, upperpicked);
  orderedPassword.push.apply(orderedPassword, numpicked);
  orderedPassword.push.apply(orderedPassword, charpicked);

  while (finalPassword.length < userlength){
    var randomIndex = Math.floor(Math.random() * orderedPassword.length);
    finalPassword.push(orderedPassword[randomIndex]);
    orderedPassword.splice(randomIndex, 1);
  }

  return finalPassword.join("");

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
