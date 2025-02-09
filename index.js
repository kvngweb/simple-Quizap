const quizData = [
    {
        question: "what is the capital of Nigeria?",
        options: ["Togo", "Spain", "Africa", "Abuja"],
        answer: "Abuja",
    },
    {
        question: "what is 2 + 2?",
        options: ["12", "4", "6", "1"],
        answer: "4",
    },
    {
        question: "Who discovered Electricity?",
        options: ["Precious Iwunnah", "Benjamin Titus", "Onyeka Eze", "Benjamin Franklin"],
        answer: "Benjamin Franklin"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const progressElement = document.getElementById("progress");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1} of ${quizData.length}: ${currentQuiz.question}`;
    progressElement.textContent = `Progress: ${currentQuestion + 1} / ${quizData.length}`;

    optionsElement.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer){
        score++;
    }
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.classList.add("hidden");
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.classList.add("hidden");
    optionsElement.classList.add("hidden");
    nextButton.classList.add("hidden");
    progressElement.classList.add("hidden");
    resultElement.classList.remove("hidden");
    resultElement.textContent = `Quiz Completed! Your score: ${score} / ${quizData.length}`;
}

loadQuestion();