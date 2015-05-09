// quiz_register.js
// Event registration for quiz buttons, and disable the quiz on page load

// Register radio buttons
var qOneRadios = document.getElementsByName("Q1");
var qTwoRadios = document.getElementsByName("Q2");
var qThreeRadios = document.getElementsByName("Q3");
var qFourRadios = document.getElementsByName("Q4");
var qFiveRadios = document.getElementsByName("Q5");

// Register other buttons
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");

// Add event handlers to buttons
submitButton.onclick = validateQuiz;
startButton.onclick = startClock;

// Disable the quiz on startup
disableQuiz();
submitButton.disabled = true;