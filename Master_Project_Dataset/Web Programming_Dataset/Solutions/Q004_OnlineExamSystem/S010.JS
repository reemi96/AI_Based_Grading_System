// Error: Does not convert input to numbers.
// The sum becomes string concatenation instead of numeric addition.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function readGrade() {
    rl.question("Grade: ", (grade) => {
        grades.push(grade);
        count++;

        if (count < 5) {
            readGrade();
        } else {
            let sum = "";

            for (let grade of grades) {
                sum += grade;
            }

            let average = sum / grades.length;

            console.log("Average:", average);

            if (average >= 60)
                console.log("Result: Pass");
            else
                console.log("Result: Fail");

            rl.close();
        }
    });
}

readGrade();