// Error: Finds highest and lowest correctly,
// but sorts in ascending order instead of descending.

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
            let highest = Math.max(...scores);
            let lowest = Math.min(...scores);

            scores.sort((a, b) => a - b);

            console.log("Highest Score:", highest);
            console.log("Lowest Score:", lowest);

            console.log("Sorted Scores:");
            scores.forEach(score => console.log(score));

            rl.close();
        }
    });
}

readScore();