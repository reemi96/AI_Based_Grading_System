// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let scores = [];
let count = 0;

function readScore() {

    rl.question("Enter score: ", (score) => {

        scores.push(parseFloat(score));

        count++;

        if (count < 5)
            readScore();
        else {

            scores.sort(function(a, b) {
                return b - a;
            });

            console.log("Highest Score:", scores[0]);
            console.log("Lowest Score:", scores[scores.length - 1]);

            console.log("Sorted Scores:");

            for (let i = 0; i < scores.length; i++) {
                console.log(scores[i]);
            }

            rl.close();
        }

    });

}

readScore();