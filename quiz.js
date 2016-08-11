//Variables
var userInputHeight = document.getElementById("user_input_height");
var userInputCharacter = document.getElementById("user_input_character");
var button = document.getElementById("button_grow");

//Event listeners
userInputHeight.addEventListener("keyup",checkEnter);
userInputCharacter.addEventListener("keyup",checkEnter);

function checkEnter(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    inputValidation();
  }
};

//When user clicks the button, run inputValidation()
button.addEventListener("click",inputValidation);

//Functions
function inputValidation() {
  userInputHeightValue = userInputHeight.value;
  userInputCharacterValue = userInputCharacter.value;
  //Check if user entered values
  if (userInputHeightValue === "" || userInputCharacterValue === "") {
    alert("Please fill in both fields.");
    //Ensure user only entered one character
  } else if (userInputCharacterValue.length > 1) {
    alert("Please enter a single character.");
    //Ensure user entered a number value for height
  } else if (isNaN(userInputHeightValue)) {
    alert("Please enter a number.");
    //If no user errors, create object out of user's entries
  } else {
    var userInputObject = {};
    userInputObject.Height = userInputHeightValue;
    userInputObject.Character = userInputCharacterValue;
    //pass the object to tree()
    tree(userInputObject);
  }
}

function tree(object) {
  var height = object.Height;
  var character = object.Character;
  //Top of tree will always start with one character
  var numCharsPerLine = 1;
  var tree = "";
  while (height > 0) {
    //Add correct number of spaces to tree
    for (var i = height - 1; i > 0; i--) {
      tree += " ";
    }
    //Add correct number of characters to the end of tree
    for (var j = numCharsPerLine; j > 0; j--) {
      tree += character;
    }
    //Each time through the while loop, print current line of tree once
    console.log(tree);
    //After printing, revert tree back to empty state
    tree = "";
    //Each time through the while loop, add two characters per tree line
    numCharsPerLine += 2;
    //Each time through the while loop, subtract one space per tree line
    height--;
  }
}