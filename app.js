
const quiz = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const question = quiz[currentQuestionIndex];

    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = quiz[currentQuestionIndex];
    const resultElement = document.getElementById("result");

    if (selectedOption === question.answer) {
        score++;
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = `Incorrect! The correct answer is ${question.answer}.`;
    }

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        displayQuestion();
        document.getElementById("result").innerText = "";
        document.getElementById("next-button").style.display = "none";
    } else {
        displayCompletionMessage();
    }
}

function displayCompletionMessage() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>You completed the quiz!</h2><p>Your score: ${score}/${quiz.length}</p>`;
}

displayQuestion();
document.getElementById("next-button").style.display = "none";
