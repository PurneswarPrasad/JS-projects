const arrayOfQuestions = [
  {
    question: "Bou na kana?",
    answers: [
      { text: "mo bou", correct: true },
      { text: "ta bou", correct: false },
      { text: "kaha bou", correct: false },
      { text: "kau bou", correct: false },
    ],
  },

  {
    question: "Bapa na kana?",
    answers: [
      { text: "ta bapa", correct: false },
      { text: "mo bapa", correct: true },
      { text: "kaha bapa", correct: false },
      { text: "kau bapa", correct: false },
    ],
  },

  {
    question: "Mandu na kana?",
    answers: [
      { text: "mo mandu", correct: false },
      { text: "ta mandu", correct: false },
      { text: "mo mandu", correct: true },
      { text: "kau mandu", correct: false },
    ],
  },

  {
    question: "Ae goura, aji kali kana khauchu?",
    answers: [
      { text: "mo rasa", correct: false },
      { text: "toh rasa", correct: false },
      { text: "panasa", correct: false },
      { text: "maunsa", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerOptions = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0; //these are set to 0 everytime so that when the quiz restarts
  score = 0; //we can get back to the 1st question's index and 0 score
  nextButton.innerHTML = "Next"; // setting the text for next button
  showQuestion();
}

function showQuestion() {
  resetPrevious(); //this resets the previous state of the questions and options
  let currentQuestion = arrayOfQuestions[currentQuestionIndex];
  questionElement.innerHTML =
    currentQuestionIndex + 1 + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add("btn");
    answerOptions.appendChild(btn);

    // this gives the button a data attribute called data-correct and sets it to true/false
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }

    btn.addEventListener("click", checkAnswer); //async function that gets attached with each button
  });
}

function resetPrevious() {
  nextButton.style.display = "none";
  while (answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild);
  }
}

//onClick of an option
function checkAnswer(e) {
  const selectedBtn = e.target;
  //adds a class="correct" to the button selected, if it's true or class="incorrect" if false.
  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  //This goes through every button and sets the data-correct attribute to true for the correct option,
  //irrespective of whichever is selected. then it disables all the buttons.
  Array.from(answerOptions.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  if (currentQuestionIndex == arrayOfQuestions.length - 1) {
    nextButton.innerHTML = "Submit";
  }
  nextButton.style.display = "block"; //Next button is shown on screen now
}

// This listens to the click on the next button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < arrayOfQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleNextButton() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex > arrayOfQuestions.length) {  //if you click on 'Play Again', this is triggered
    startQuiz();
  }

  if (currentQuestionIndex < arrayOfQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetPrevious();
  questionElement.innerHTML = `Your score is ${score}/${arrayOfQuestions.length}`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

startQuiz();
