const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    const current = quizData[currentIndex];
    questionEl.textContent = current.question;

    optionsEl.innerHTML = "";
    current.options.forEach((opt) => {
        optionsEl.innerHTML += `
            <div>
                <input type="radio" name="answer" value="${opt}">
                <label>${opt}</label>
            </div>
        `;
    });
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='answer']:checked");

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (selected.value === quizData[currentIndex].answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";

    scoreEl.style.display = "block";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

