var questions = [
  {
    question: "JavaScript is used for:?",
    options: ["Styling web pages", "Adding interactivity to web pages", "Storing data only", "None of these"],
    answer: "Adding interactivity to web pages"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: "4"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["/* */", "//", "<!-- -->", "*/ /*"],
    answer: "//"
  },
  {
    question: "Which of the following is a looping structure in JavaScript?",
    options: ["if", "for" ,"switch", "break"],
    answer: "for"
  }
];

var currentQuestion = 0;   // Question num
var score = 0;             // count of ans

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var nextBtn = document.getElementById("next-btn");

// start of questn
showQuestion();

function showQuestion() {
  // Reset other options
  optionsElement.innerHTML = "";
  nextBtn.style.display = "none";

  var q = questions[currentQuestion];
  questionElement.textContent = (currentQuestion + 1) + ". " + q.question;

  for (var i = 0; i < q.options.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = q.options[i];
    btn.onclick = function () {
      checkAnswer(this.textContent, q.answer);
    };
    optionsElement.appendChild(btn);
  }
}

function checkAnswer(selected, correct) {
  var buttons = optionsElement.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true; // the ans will not change
    if (buttons[i].textContent === correct) {
      buttons[i].style.background = "lightgreen"; // highlighting correct ans
            buttons[i].style.color = "black"; 

       buttons[i].innerHTML += ' <i class="fas fa-check"></i>';
    }
  }

  if (selected === correct) {
    score++;
  } else {
    // highlight the wrong one
    event.target.style.background = "lightcoral";

    event.target.innerHTML += ' <i class="fas fa-times"></i>'; 
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = "You scored " + score + " out of " + questions.length + "!";
  optionsElement.innerHTML = "";
  nextBtn.style.display = "none";
}
