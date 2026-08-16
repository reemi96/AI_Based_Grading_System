// Error: Pass/Fail condition is reversed.
// Students with average >= 60 are marked as Fail.

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

            if (average >= 60)
                console.log("Result: Fail");
            else
                console.log("Result: Pass");

            rl.close();
        }
    });
}

readGrade();