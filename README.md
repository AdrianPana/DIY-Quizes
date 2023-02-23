### Adrian Pana

# DIY Quizes

An app created with JavaScript and Electron.
Create your own quizes with choose-the-right-answer questions and use them to
learn by replaying them as many times as you need.

### To run the app
`npm start`

## Current status

- Released the MVP for the app
- [The Main Menu](src/main.html) has 2 buttons for creating and taking a quiz
- [The Create Menu](src/createquiz.html) has fields that have to be filled in in order to add a question
- The Quiz is stored in [quizdata](quizdata.txt)
- [The Take Quiz Window](src/index.html) loads the quiz and displays the questions, one by one
- The answers are displayed in a random order each time
- It keeps track of the total correct answers and it displays the number at the end

## Future goals

- Reorganize and rename the project files (it's a mess)
- Make it pretty! (I need to learn CSS)
- Currently there is only one quiz stored at a time. When creating a new quiz, the old one is erased :disappointed_relieved:
- We need a way of storing multiple quizes at a time
- A menu for displaying all the quizes, and ways to add, delete & modify them
- Randomized order for the questions in a quiz
- Highscores for quizes
- Variable number of answers per question (currently it's a set number of 4)
