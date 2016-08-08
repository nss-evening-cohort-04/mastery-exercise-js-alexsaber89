//Variables
var userInputHeight = document.getElementById("user_input_height");
var userInputCharacter = document.getElementById("user_input_character");
var userInputObject = {};
var button = document.getElementById("button_grow");

//Event listeners
function checkEnter(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    inputValidation();
    console.log("checkEnter() ran");
  }
};

userInputHeight.addEventListener("keyup",checkEnter);
userInputCharacter.addEventListener("keyup",checkEnter);
button.addEventListener("click",inputValidation);

//Functions

function inputValidation() {
  userInputHeightValue = userInputHeight.value;
  userInputCharacterValue = userInputCharacter.value;
  if (userInputHeightValue === "" || userInputCharacterValue === "") {
    alert("Please fill in both fields.");
    console.log("Error");
  } else {
    userInputObject.Height = userInputHeightValue;
    userInputObject.Character = userInputCharacterValue;
    console.log("User Input Object: ",userInputObject);
    console.log("Height: ",userInputObject.Height);
    console.log("Character: ",userInputObject.Character);
    // tree(userInputObject);
  }
}

// function tree() {

// }