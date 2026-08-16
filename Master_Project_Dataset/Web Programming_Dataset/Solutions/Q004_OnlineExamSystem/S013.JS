// Error: Checks only the first grade to decide Pass/Fail.
// Average calculation is missing.

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
            console.log("Average:", grades[0]);

            if (grades[0] >= 60)
                console.log("Result: Pass");
            else
                console.log("Result: Fail");

            rl.close();
        }
    });
}

readGrade();