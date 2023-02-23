import Entry from "./entry.js";
import Quiz from "./quiz.js";
const fs = require('fs');

const feedback = document.getElementById('feedback')
const question = document.getElementById('question');
const answer1 = document.getElementById('quiz-answer-1');
const answer2 = document.getElementById('quiz-answer-2');
const answer3 = document.getElementById('quiz-answer-3');
const answer4 = document.getElementById('quiz-answer-4');

const submitBtn = document.getElementById('submit-btn');
const backBtn = document.getElementById('back-btn');

let rightAnswer;

function loadQuiz() {
    // loadEntry(quiz.showEntry(0));
    loadNextEntry();
}
function loadEntry(entry) {

    submitBtn.disabled = false;
    rightAnswer = entry.rightAnswer;

    question.innerHTML = entry.question;

    answer1.innerHTML = entry.answers[0];
    answer2.innerHTML = entry.answers[1];
    answer3.innerHTML = entry.answers[2];
    answer4.innerHTML = entry.answers[3];

}

function loadNextEntry() {

    feedback.innerHTML="";
    const result = quiz.showNextEntry();
    if (result.question !== undefined)
        loadEntry(result);
    else {
        feedback.innerHTML = quiz.getResult();
        backBtn.removeAttribute("hidden");
    }
}

submitBtn.addEventListener("click", () => {

    let selected;
    const answers = document.querySelectorAll(".answers")
    answers.forEach(answer => {
        if (answer.checked) {
            selected = answer;
            selected.checked = false;
            const id = answer.id;
            const selectedAnswer = document.getElementById('quiz-answer-' + id);
            const result = quiz.answerEntry(selectedAnswer.innerHTML)
            if (result.result)
                feedback.innerHTML = "Correct!";
            else {
                feedback.innerHTML = "Wrong! The correct answer is " + result.rightAnswer;
            }
        }
    })

    submitBtn.disabled = true;
    if (selected)
        setTimeout(loadNextEntry, 2000);
})

const quiz = JSON.parse(fs.readFileSync("./quizdata.txt"));
Object.setPrototypeOf(quiz, Quiz.prototype);
quiz.entries.forEach(entry => {
    Object.setPrototypeOf(entry, Entry.prototype);
})
loadQuiz();