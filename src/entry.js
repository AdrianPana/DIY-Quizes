export default class Entry {
    constructor(question, answers, rightAnswerIndex) {
        this.question = question;
        this.answers = answers;
        this.rightAnswer = answers[rightAnswerIndex];
    }

    getEntry() {
        let shuffledAnswers = this.answers
            .map(answer => ({answer, sort: Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map(({answer}) => answer);

        return {
            question: this.question,
            answers: shuffledAnswers,
            rightAnswer: this.rightAnswer
        }
    }
    checkAnswer(answer) {
        const res = this.rightAnswer === answer;
        return (res ? {
            result: res
        } : {
            result: res,
            rightAnswer: this.rightAnswer
        });
    }
}