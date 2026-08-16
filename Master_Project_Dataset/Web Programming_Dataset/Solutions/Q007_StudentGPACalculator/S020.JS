// Error: Stops after reading the first grade because rl.close() is placed too early.
// Without Standing determination
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function readGrade() {
    rl.question("Enter grade: ", (grade) => {
        grades.push(Number(grade));
        count++;

        rl.close();

        if (count < 5) {
            readGrade();
        } else {
            console.log("GPA:", gradeToPoint(grades[0]));
        }
    });
}

function gradeToPoint(grade) {
    if (grade >= 90) return 4;
    else if (grade >= 80) return 3;
    else if (grade >= 70) return 2;
    else if (grade >= 60) return 1;
    else return 0;
}

readGrade();