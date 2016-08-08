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

button.addEventListener("click",inputValidation);

//Functions
function inputValidation() {
  userInputHeightValue = userInputHeight.value;
  userInputCharacterValue = userInputCharacter.value;
  if (userInputHeightValue === "" || userInputCharacterValue === "") {
    alert("Please fill in both fields.");
    console.log("Error");
  } else {
    var userInputObject = {};
    userInputObject.Height = userInputHeightValue;
    userInputObject.Character = userInputCharacterValue;
    tree(userInputObject);
  }
}

  // Start with height-1 of spaces, then add one character
  // Each additional line, height - 1 of spaces, then add two more characters
function tree(object) {
  var height = object.Height;
  var character = object.Character;
  var tree = "";
  while (height > 0) {
    for (var i = height - 1; i > 0; i--) {
      tree += " ";
    }
    tree += character;
    console.log(tree);
    height--;
    tree = "";
  } //end of while loop
} //end of tree()

/*
      *
     ***
    *****
   *******
  *********
 ***********
*************

*/