// console.log("hello js");
//   var username = prompt("Give user name");

//   var welcomeMessage = "Welcome "+ username;

// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
 
btnTranslate.addEventListener("click", clickHandler);


function clickHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
}