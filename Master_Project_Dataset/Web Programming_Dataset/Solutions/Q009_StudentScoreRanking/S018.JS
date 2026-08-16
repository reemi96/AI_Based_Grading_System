// Error: Correct sorting, but output format is wrong.
// Labels do not match the required output.

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

            console.log("Max:", scores[0]);
            console.log("Min:", scores[scores.length - 1]);

            console.log("Scores:");
            scores.forEach(score => console.log(score));

            rl.close();
        }
    });
}

readScore();