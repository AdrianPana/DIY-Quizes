import Entry from "./entry.js";

export default class Quiz {

    entry_no = 0;
    correct_no = 0;
    currentEntry;

    constructor(entries) {
        this.entries = entries;
    }

    addEntry(question, answers, rightAnswer) {
        let entry = new Entry(question, answers, rightAnswer);
        this.entries.push(entry);
        if (this.currentEntry == null)
            this.currentEntry = entry;
    }

    getResult() {
        return this.correct_no + "/" + this.entries.length + " correct";
    }

    showAllEntries() {
        console.log(this.entries);
    }
    showEntry(no) {
        this.currentEntry = this.entries[no];
        return this.currentEntry.getEntry();
    }

    answerEntry(answer) {
        let result = this.currentEntry.checkAnswer(answer);
        if (result.result) {
            this.correct_no++;
            return result;
        }
        return result;
    }

    showNextEntry() {
        if (this.entries.length === this.entry_no) {
            return this.getResult();
        } else {
            return this.showEntry(this.entry_no++);
        }
    }
}