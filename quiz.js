//Variables
var userInputHeight = document.getElementById("user_input_height");
var userInputCharacter = document.getElementById("user_input_character");
var button = document.getElementById("button_grow");

//Event listeners
function checkEnter(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    // inputValidation();
    console.log("checkEnter() ran");
  }
};

userInputHeight.addEventListener("keyup",checkEnter);
userInputCharacter.addEventListener("keyup",checkEnter);
// button.addEventListener("click",inputValidation);