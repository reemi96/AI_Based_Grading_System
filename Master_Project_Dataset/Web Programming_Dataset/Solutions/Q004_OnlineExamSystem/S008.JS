// Error: Always prints Fail regardless of the average.

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

        if (count < 5) {
            readGrade();
        } else {
            let sum = 0;

            for (let grade of grades) {
                sum += grade;
            }

            let average = sum / grades.length;

            console.log("Average:", average);
            console.log("Result: Fail");

            rl.close();
        }
    });
}

readGrade();