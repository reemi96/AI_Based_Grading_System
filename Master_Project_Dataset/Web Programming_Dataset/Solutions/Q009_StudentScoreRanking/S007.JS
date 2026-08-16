// Error: Uses Math.max and Math.min correctly,
// but does not sort the scores before displaying them.

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
            console.log("Highest Score:", Math.max(...scores));
            console.log("Lowest Score:", Math.min(...scores));

            console.log("Sorted Scores:");
            scores.forEach(score => console.log(score));

            rl.close();
        }
    });
}

readScore();