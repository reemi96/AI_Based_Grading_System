// Correct solution.
// Uses reduce().

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
        }
        else {

            let sum =
                grades.reduce((a, b) => a + b, 0);

            let average = sum / 5;

            console.log("Average:", average);
            console.log(
                average >= 60
                    ? "Result: Pass"
                    : "Result: Fail"
            );

            rl.close();
        }
    });
}

readGrade();