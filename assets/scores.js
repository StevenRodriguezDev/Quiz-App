const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maxHighScores = 5;

console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
  //   console.log(username.value);
});

saveHighScore = (e) => {
  console.log("clicked saved button");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 30),
    name: username.value,
    // highScores: highScores.value,
  };
  localStorage.setItem("score", JSON.stringify("score"));

  console.log(score);

  highScores.push(score);
  //   //   highScores.push(mostRecentScore);
  highScores.sort((a, b) => b.score - a.score);
  //   //   highScores.sort((a, b) => b.mostRecentScore - a.mostRecentScore);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  localStorage.setItem("score", JSON.stringify(score));
  window.location.assign("./home.html");
  console.log(mostRecentScore);
};

// function render() {
//   var lastScore = JSON.parse(localStorage.getItem("score"));
//   if (lastScore != null) {
//     document.getElementById("saved-name").innerHTML = lastScore.username;
//     document.getElementById("saved-score").innerHTML = lastScore.finalScore;
//   }
// }
// saveScoreBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   saveHighScore();
// });

//timer

// const timerDisplay = () => {
//   countdown = setInterval(() => {
//     count--;
//     timeLeft.innerHTML = `${count}s`;
//     if (count == 0) {
//       clearInterval(countdown);
//       displayNext();
//     }
//   }, 1000);
// };
