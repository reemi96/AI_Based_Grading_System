// Error: Uses raw numeric grades directly instead of converting them to grade points.

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

        if (count < 5) {
            readGrade();
        } else {
            let total = 0;

            for (let grade of grades) {
                total += grade;
            }

            let gpa = total / grades.length;

            console.log("GPA:", gpa);

            if (gpa >= 3.5) console.log("Standing: Excellent");
            else if (gpa >= 2.5) console.log("Standing: Very Good");
            else if (gpa >= 2.0) console.log("Standing: Good");
            else if (gpa >= 1.0) console.log("Standing: Pass");
            else console.log("Standing: Fail");

            rl.close();
        }
    });
}

readGrade();