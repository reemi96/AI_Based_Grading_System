// Error: Stops after reading the first score because rl.close() is placed too early.
// & Without lowest score and sorted scores
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

        rl.close();

        if (count < 5) {
            readScore();
        } else {
            scores.sort((a, b) => b - a);
            console.log("Highest Score:", scores[0]);
        }
    });
}

readScore();