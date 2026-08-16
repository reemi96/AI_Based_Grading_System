// Error: Divides by 4 instead of 5 when calculating average.

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

            let sum = 0;

            for (let grade of grades)
                sum += grade;

            let average = sum / 4;

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