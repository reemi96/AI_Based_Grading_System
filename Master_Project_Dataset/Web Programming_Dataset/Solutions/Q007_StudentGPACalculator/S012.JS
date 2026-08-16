// Correct solution.
// Uses while loop for GPA accumulation.

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

function readGrade() {
    rl.question("Enter grade: ", (grade) => {
        grades.push(Number(grade));
        count++;

        if (count < 5) {
            readGrade();
        } else {
            let i = 0;
            let total = 0;

            while (i < grades.length) {
                total += gradeToPoint(grades[i]);
                i++;
            }

            let gpa = total / grades.length;
            let standing = "";

            if (gpa >= 3.5) standing = "Excellent";
            else if (gpa >= 2.5) standing = "Very Good";
            else if (gpa >= 2.0) standing = "Good";
            else if (gpa >= 1.0) standing = "Pass";
            else standing = "Fail";

            console.log("GPA:", gpa);
            console.log("Standing:", standing);

            rl.close();
        }
    });
}

readGrade();