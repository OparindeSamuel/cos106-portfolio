const quiz = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlink Text Machine Language",
            "High Text Machine Language"
        ],
        correct: 0
    },

    {
        question: "Which HTML tag is used to create a paragraph?",
        answers: [
            "<p>",
            "<h1>",
            "<div>",
            "<br>"
        ],
        correct: 0
    },

    {
        question: "Which language makes websites interactive?",
        answers: [
            "C++",
            "JavaScript",
            "PHP",
            "SQL"
        ],
        correct: 1
    },

    {
        question: "Which HTML tag is used to insert an image into a webpage?",
        answers: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        correct: 1
    },

    {
        question: "Which company developed JavaScript?",
        answers: [
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        correct: 2
    }

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("score");

function loadQuestion() {

    answers.innerHTML = "";

    question.innerHTML =
        `Question ${currentQuestion + 1} of ${quiz.length}<br><br>${quiz[currentQuestion].question}`;

    quiz[currentQuestion].answers.forEach((answer, index) => {

        const button = document.createElement("button");

        // IMPORTANT: Use textContent instead of innerHTML
        button.textContent = answer;

        button.className = "answer-btn";

        button.onclick = function () {
            checkAnswer(index);
        };

        answers.appendChild(button);

    });

}

function checkAnswer(selected) {

    if (selected === quiz[currentQuestion].correct) {
        score++;
    }

    Array.from(answers.children).forEach(button => {
        button.disabled = true;
    });

}

nextBtn.onclick = function () {

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }

};

function showResult() {

    question.innerHTML = "🎉 Quiz Completed!";

    answers.innerHTML = "";

    nextBtn.style.display = "none";

    let percent = (score / quiz.length) * 100;

    scoreBox.innerHTML = `
        <h2>Your Score: ${score}/${quiz.length}</h2>
        <h3>Percentage: ${percent}%</h3>
    `;

}

loadQuestion();