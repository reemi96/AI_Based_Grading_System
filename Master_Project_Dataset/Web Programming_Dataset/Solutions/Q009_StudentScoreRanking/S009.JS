// Error: Sorts correctly but prints only the highest and lowest.
// Sorted scores list is missing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let scores = [];
let count = 0;

function readScore() {
    rl.question("Enter score: ", (score) => {
        scores.push(Number(score));
        count++;

        if (count < 5) {
            readScore();
        } else {
            scores.sort((a, b) => b - a);

            console.log("Highest Score:", scores[0]);
            console.log("Lowest Score:", scores[scores.length - 1]);

            rl.close();
        }
    });
}

readScore();