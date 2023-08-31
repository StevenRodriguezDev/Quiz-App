//================ variables================
const question = document.getElementById("question");
const option = Array.from(document.getElementsByClassName("option"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "what does HTML stand for",
    choice1: "hhh",
    choice2: "aaa",
    choice3: "bbb",
    choice4: "ccc",
    answer: 1,
  },
  {
    question: "what does CSS stand for",
    choice1: "hhh",
    choice2: "aaa",
    choice3: "bbb",
    choice4: "ccc",
    answer: 3,
  },
  {
    question: "what does JS stand for",
    choice1: "hhh",
    choice2: "aaa",
    choice3: "bbb",
    choice4: "ccc",
    answer: 3,
  },
];

const correct_bonus = 10;
const max_questions = 3;
// ============= functions ==========
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  //   console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= max_questions) {
    return window.location.assign("/end.html");
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
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    selectedChoice.parentElement.classList.add(classToApply);
    console.log(selectedAnswer == currentQuestion.answer);
    getNewQuestion();
  });
});
startGame();
