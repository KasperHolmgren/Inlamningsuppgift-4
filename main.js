/*uppgift 1

let button = document.getElementById("button");

button.addEventListener("click", function() {
    if (button.innerHTML === "OFF") {
      button.innerHTML = "ON";
    } else {
      button.innerHTML = "OFF";
    }
  });
*/ 

/*uppgift 2

let button = document.getElementById("button");
let redCircle = document.getElementById("redCircle");

button.addEventListener("click", function() {
  redCircle.parentNode.removeChild(redCircle);
});
*/

/*uppgift 3

var hideButton = document.createElement("button");
hideButton.innerHTML = "DÖLJ";

var showButton = document.createElement("button");
showButton.innerHTML = "VISA";


var h1element = document.getElementById("titel");

hideButton.addEventListener("click", function() {
  h1element.style.display = "none";
});

showButton.addEventListener("click", function() {
  h1element.style.display = "block";
});


document.body.appendChild(hideButton);
document.body.appendChild(showButton);
*/

/*Uppgift 4

var input = document.querySelector('input[type="text"]');

input.addEventListener("keydown", function() {
  alert("Jag ser dig skriva, jag är i dina väggar");
});
*/

/* Uppgift 5

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min));
  }
  
*/

