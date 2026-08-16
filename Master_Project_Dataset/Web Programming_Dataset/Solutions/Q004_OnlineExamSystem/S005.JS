// Error: Uses the highest grade instead of calculating the average.

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

        if (count < 5)
            readGrade();
        else {

            let highest = Math.max(...grades);

            console.log("Average:", highest);

            if (highest >= 60)
                console.log("Result: Pass");
            else
                console.log("Result: Fail");

            rl.close();
        }
    });
}

readGrade();