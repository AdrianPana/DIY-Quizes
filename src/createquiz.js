import Quiz from "./quiz.js";
const fs = require('fs');

const addBtn = document.getElementById('add-btn');
const newBtn = document.getElementById('new-btn');
const doneBtn = document.getElementById('done-btn');

function addQuery() {
    const question = document.getElementById('question');
    const answers = document.querySelectorAll('.answer');

    let questionText = question.value;
    let answerArr = [];
    let answerIndex = null;

    answers.forEach(answer => {
        if (answer.value === '')
            return;
        answerArr.push(answer.value);

        let radioId = "answer-" + answer.id;
        const radioBtn = document.getElementById(radioId);
        if (radioBtn.checked) {
            answerIndex =  answer.id - 1;
        }
    })

    if (!questionText || answerIndex === null || answerArr.length !== 4)
        return;

    quiz.addEntry(questionText, answerArr, answerIndex);
    const data = JSON.stringify(quiz);
    fs.writeFile("./quizdata.txt", data, (err) => {
        console.log(err);
    })
}

function clearEntry() {
    const question = document.getElementById('question');
    const answers = document.querySelectorAll('.answer');
    const answersRadio = document.querySelectorAll('.answers');

    question.value = '';
    answers.forEach(answer => {
        answer.value = '';
    })
    answersRadio.forEach(answer => {
        answer.checked = false;
    })
}

function saveQuiz() {
    const quizData = JSON.stringify(quiz.entries);
}

addBtn.addEventListener("click", addQuery);
newBtn.addEventListener("click", clearEntry);
doneBtn.addEventListener("click", saveQuiz);

const quiz = new Quiz([]);


