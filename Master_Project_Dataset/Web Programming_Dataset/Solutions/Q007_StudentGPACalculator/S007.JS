// Error: Standing logic is reversed.
// High GPA may be classified as Fail and low GPA may be classified as Excellent.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function gradeToPoint(grade) {
    if (grade >= 90) return 4;
    else if (grade >= 80) return 3;
    else if (grade >= 70) return 2;
    else if (grade >= 60) return 1;
    else return 0;
}

function readGrade() {
    rl.question("Enter grade: ", (grade) => {
        grades.push(Number(grade));
        count++;

        if (count < 5) {
            readGrade();
        } else {
            let total = 0;

            for (let grade of grades) {
                total += gradeToPoint(grade);
            }

            let gpa = total / grades.length;

            console.log("GPA:", gpa);

            if (gpa >= 3.5)
                console.log("Standing: Fail");
            else if (gpa >= 2.5)
                console.log("Standing: Pass");
            else if (gpa >= 2.0)
                console.log("Standing: Good");
            else if (gpa >= 1.0)
                console.log("Standing: Very Good");
            else
                console.log("Standing: Excellent");

            rl.close();
        }
    });
}

readGrade();