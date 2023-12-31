//================ variables================
const question = document.getElementById("question");
const option = Array.from(document.getElementsByClassName("option"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let count = 20;

var interval = setInterval(function () {
  document.getElementById("timer").innerHTML =
    "Time left: " + count + " seconds";
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Time left:" + count;
    // or...
    alert("Time is up!");
  }
}, 1000);

let questions = [
  {
    question: "what does HTML stand for",
    choice1: "HyperText Markup Language",
    choice2: "HyperTell Markup Language",
    choice3: "HypeT Mark Language",
    choice4: "HowText Marks Language",
    answer: 1,
  },
  {
    question: "what does CSS stand for",
    choice1: "Case Sim Style",
    choice2: "Cascading Style Sheets",
    choice3: "Case Sensitive Style",
    choice4: "Cascading Sheets Style ",
    answer: 2,
  },
  {
    question: "what does JS stand for",
    choice1: "JavaScreen",
    choice2: "JoinScript",
    choice3: "JavaScript",
    choice4: "JoinScreen",
    answer: 3,
  },
];

const correct_bonus = 10;
const max_questions = 3;
// ============= functions ==========
// showGame = () => {
//   let game = document.getElementsByClassName("gameStart");
//   if (game.style.display === "none") {
//     game.style.display = "block";
//   }
//   //   document.getElementsByClassName("gameStart").style.display = "block";
// };

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  //   clearInterval(countdown);
  //   timerDisplay();
  //   console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= max_questions) {
    localStorage.setItem("mostRecentScore", score);
    //goes to end of game page
    return window.location.assign("./scores.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  option.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

option.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    // console.log(e.target);
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "wrong";

    if (classToApply === "correct") {
      incrementScore(correct_bonus);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    // console.log(selectedAnswer == currentQuestion.answer);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
startGame();

// score page

// const username = document.getElementById("username");
// username.addEventListener("keyup", () => {
//   console.log(username.value);
// });
// saveHighscore = (e) => {
//   console.log("saved");
//   e.preventDefault();
// };
