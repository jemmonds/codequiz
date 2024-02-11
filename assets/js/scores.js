var scoreList = document.querySelector("#highscores");
var clearScore = document.querySelector("#clear");

var savedScore = JSON.parse (localStorage.getItem("score")) || []; 

scoreList.textContent = JSON.stringify(savedScore);



var clearScore = document.querySelector("#clear");

clearScore.addEventListener("click" , function (event) {
scoreList.textContent = ""; 
localStorage.removeItem("score");
})



var highScore = function () {
  scoreList.textContent = ""; 
  for (let i = 0; i < savedScore.length; i++) {
  let li = document.createElement("li");
  li.textContent = `${savedScore[i].initials}: ${savedScore[i].time}`;
  scoreList.append(li);
}}

highScore();