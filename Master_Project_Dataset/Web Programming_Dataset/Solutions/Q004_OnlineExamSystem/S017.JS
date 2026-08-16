// Error: Stops after reading the first grade because rl.close() is placed inside the reading step.
// WITHOUT Pass/Fail logic
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function readGrade() {
    rl.question("Grade: ", (grade) => {
        grades.push(Number(grade));
        count++;

        rl.close();

        if (count < 5) {
            readGrade();
        } else {
            let sum = grades.reduce((a, b) => a + b, 0);
            let average = sum / grades.length;

            console.log("Average:", average);
        }
    });
}

readGrade();