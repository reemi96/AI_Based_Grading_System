// Correct solution.
// Uses helper function.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAverage(grades) {

    let sum = 0;

    for (let grade of grades)
        sum += grade;

    return sum / grades.length;
}

let grades = [];
let count = 0;

function readGrade() {

    rl.question("Grade: ", (grade) => {

        grades.push(Number(grade));

        count++;

        if (count < 5)
            readGrade();
        else {

            let average =
                calculateAverage(grades);

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