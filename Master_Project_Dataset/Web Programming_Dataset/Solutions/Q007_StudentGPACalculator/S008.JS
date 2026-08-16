// Correct solution.
// Uses helper functions for grade conversion and standing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function gradeToPoint(grade) {
    if (grade >= 90) return 4;
    if (grade >= 80) return 3;
    if (grade >= 70) return 2;
    if (grade >= 60) return 1;
    return 0;
}

function getStanding(gpa) {
    if (gpa >= 3.5) return "Excellent";
    if (gpa >= 2.5) return "Very Good";
    if (gpa >= 2.0) return "Good";
    if (gpa >= 1.0) return "Pass";
    return "Fail";
}

function readGrade() {
    rl.question("Enter grade: ", (grade) => {
        grades.push(Number(grade));
        count++;

        if (count < 5) {
            readGrade();
        } else {
            let total = 0;

            grades.forEach(g => {
                total += gradeToPoint(g);
            });

            let gpa = total / 5;

            console.log("GPA:", gpa);
            console.log("Standing:", getStanding(gpa));

            rl.close();
        }
    });
}

readGrade();