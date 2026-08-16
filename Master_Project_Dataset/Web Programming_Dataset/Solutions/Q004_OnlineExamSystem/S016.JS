// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function readGrade() {

    rl.question("Grade: ", (grade) => {

        grades.push(parseFloat(grade));

        count++;

        if (count < 5)
            readGrade();
        else {

            let total = 0;

            grades.forEach(g => {
                total += g;
            });

            let average = total / grades.length;

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