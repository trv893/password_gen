// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // prevents display of password incompatable entryies
  if (!(userchoosenlength > 7 && userchoosenlength < 129)){
    $("#alertMessage").css("display","block");
    return false;
  }

  passwordText.value = password;
}

// generates passowrd based on user specified parameters for lowercase, uppercase, numners, special characters and length and sets default parameters if user declines to specifty
function generatePassword(userlower=$("#lowercaseUserValue").val(), userupper=$("#uppercaseUserValue").val(), usernumb=$("#numbersUserValue").val(), userchar=$("#specialCharUserValue").val(), userlength= userchoosenlength){
  let finalPassword = [];
  let orderedPassword = [];
  let lowerpicked =[];
  let upperpicked =[];
  let numpicked = [];
  let charpicked = [];
// creates list of all possible characters to include in password
  const capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowLetter = "abcdefghijklmnopqrstuvwxyz";
  const numbs = "0123456789";
  const chars = "!@#$%^&*()?";
// randomly selects lowercase letters based on user selected quantity
  while (finalPassword.length < userlength && lowerpicked.length < userlower){
    lowerpicked.push(lowLetter[Math.floor(Math.random() * lowLetter.length)]);
  };
// randomly selects uppercase letters based on user selected quantity
  while (finalPassword.length < userlength && upperpicked.length < userupper){
    upperpicked.push(capLetter[Math.floor(Math.random() * capLetter.length)]);
  };
// randomly selects numbers based on user selected quantity
  while (finalPassword.length < userlength && numpicked.length < usernumb){
    numpicked.push(numbs[Math.floor(Math.random() * numbs.length)]);
  };
// randomly selects special characters based on user selected quantity 
  while (finalPassword.length < userlength && charpicked.length < userchar){
    charpicked.push(chars[Math.floor(Math.random() * chars.length)]);
  };
// creates array of combined randomly selected lowercase, uppercase, numbers and characters previously generated
  orderedPassword.push.apply(orderedPassword, lowerpicked);
  orderedPassword.push.apply(orderedPassword, upperpicked);
  orderedPassword.push.apply(orderedPassword, numpicked);
  orderedPassword.push.apply(orderedPassword, charpicked);
// generates randomized final password from ordered password
  while (finalPassword.length < userlength){
    // creates variable randomIndex to be used to randomly select an index from orderedPassword array
    var randomIndex = Math.floor(Math.random() * orderedPassword.length);
    // adds random index to finalPassowrd
    finalPassword.push(orderedPassword[randomIndex]);
    // removes the added array element from ordered password to prevent recurrance in final password
    orderedPassword.splice(randomIndex, 1);
  }
// returns the final radomized password meeting user specified conditions
  return finalPassword.join("");

};

// Add event listener to generate button
$(generateBtn).on("click", writePassword)

// enables user manual inputs to effect slider position and display password length
$("#user_inputs input").on("change", function(e){
  // variables out jquery inputs from event listener
  let $lc = $("#lowercaseUserValue");
  let $uc = $("#uppercaseUserValue");
  let $num = $("#numbersUserValue");
  let $specchar = $("#specialCharUserValue")
  let $passwordLengthSlider = $("#customRange2")
  // grabs user input from jquery variables
  let lcval = $lc.val();
  let ucval = $uc.val();
  let numval = $num.val();
  let specchar = $specchar.val();
  let passwordLengthSlider = $passwordLengthSlider.val();
  // calculates totals user selected values for all character options by parsing the string into and int and adding
  let totalCharacters = parseInt(lcval) + parseInt(ucval) + parseInt(numval) + parseInt(specchar)
  // sets slider postion to reflext total number of characters chosen by user
  $('#customRange2').val(totalCharacters);
});

// eneacts changes to user manual inputs so they reflect slider position
$("#slider").on("change", function(e){
  // sets jquery variable for slider position 
  let $passwordLengthSlider = $("#customRange2")
  // obtains value from jquery array of slider position
  let passwordLengthSlider = $passwordLengthSlider.val();
  // divides the value of the position of the slider by 4
  let equalCharacterCalcFromSlider = parseFloat(passwordLengthSlider) / 4;
// sets each value of password character options so that their sum equals the position of slider
  $('#lowercaseUserValue').val(equalCharacterCalcFromSlider);
  $('#uppercaseUserValue').val(equalCharacterCalcFromSlider);
  $('#numbersUserValue').val(equalCharacterCalcFromSlider);
  $('#specialCharUserValue').val(equalCharacterCalcFromSlider);
});

// sets initial passwoord length
let userchoosenlength = 8;
// adds event listener for changes in entire form of password options
$("#frmPasswordOptions").on("change",function(e){
    // variables out jquery array of user selected values for password options
    let $lc = $("#lowercaseUserValue");
    let $uc = $("#uppercaseUserValue");
    let $num = $("#numbersUserValue");
    let $specchar = $("#specialCharUserValue")
  // selects value from jquery array
    let lcval = $lc.val();
    let ucval = $uc.val();
    let numval = $num.val();
    let specchar = $specchar.val();
  // calculates the total characters of all passwword options which together relflect totoal passowrd length
    let totalCharacters = parseInt(lcval) + parseInt(ucval) + parseInt(numval) + parseInt(specchar);
  // displays password length calculated by totalCharacters in <span> in html
    $("#valCustumRange2").text(totalCharacters);
    // sets global variable userchoosenlength to the total number of chosen characters
    userchoosenlength = totalCharacters;
    // checks that user inputs are within acceptance criteria and displays alery with criteria if not
    if (!(userchoosenlength > 7 && userchoosenlength < 129)){
      $("#alertMessage").css("display","block");
      return false;
    }
    
    return userchoosenlength;


});

// calls writePassword when user clicks the generate password button to initiate the generation of a new password
$("#updatePassowrd").on("click", writePassword());

// enables display of passowrd options on single click of generate button so that future clicks will not effect the display of user input options
$('#generate').one('click', function(e){
  $("#userInputs").css("display","block")
});

