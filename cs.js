var userInput  = document.querySelector(".input")
var guess = document.getElementById("guess")
var guessnumber1 = document.querySelector (".guessnumber")
var minNum = 1
var maxNum = 100
var computerNumber = Math.ceil(Math.random() * maxNum * minNum)
console.log (computerNumber)
var response1 = document.querySelector(".response")
var clear = document.querySelector("#clear")
var reset = document.querySelector("#resetgame")
var min = document.querySelector("#min")
var max = document.querySelector("#max")
var minimum = 0
var maximum = 100



guess.addEventListener("click", function() {
  guessnumber1.innerText = userInput.value
  checkFields()
})


function checkFields(){
  var userNumber = userInput.value
  var guess = parseInt(userNumber)
if (guess > computerNumber && guess < maximum) {
  response1.innerText = "That is too high"
} else if (guess < computerNumber && guess > minimum){
  response1.innerText = "That is too low"
} else if (computerNumber === guess){
  response1.innerText = "BOOM!"
} else {
  response1.innerText = "Please enter a valid number"
}
}

clear.addEventListener("click", function () {
  userInput.value = ""
})

reset.addEventListener("click", function () {
  userInput.value = ""
  guessnumber1.innerText = ""
  response1.innerText = ""
})

userInput.addEventListener("keyup", function () {
  clear.disabled = false;
  reset.disabled = false;
})
