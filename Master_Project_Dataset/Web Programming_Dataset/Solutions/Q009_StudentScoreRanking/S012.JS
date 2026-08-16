// Error: Uses only the first three scores when sorting and displaying.
// Last two scores are ignored.

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
            let selectedScores = [scores[0], scores[1], scores[2]];

            selectedScores.sort((a, b) => b - a);

            console.log("Highest Score:", selectedScores[0]);
            console.log("Lowest Score:", selectedScores[selectedScores.length - 1]);

            console.log("Sorted Scores:");
            selectedScores.forEach(score => console.log(score));

            rl.close();
        }
    });
}

readScore();