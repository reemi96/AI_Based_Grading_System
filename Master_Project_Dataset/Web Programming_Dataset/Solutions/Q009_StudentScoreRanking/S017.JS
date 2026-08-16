// Error: Sorts correctly but prints the lowest score as the second element,
// which is wrong unless the array has only two elements.

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
            console.log("Lowest Score:", scores[1]);

            console.log("Sorted Scores:");
            scores.forEach(score => console.log(score));

            rl.close();
        }
    });
}

readScore();