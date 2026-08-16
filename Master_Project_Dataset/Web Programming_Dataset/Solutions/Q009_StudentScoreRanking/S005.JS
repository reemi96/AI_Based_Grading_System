// Error: Displays the highest score correctly but prints the original array instead of the sorted array.

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

        if (count < 5)
            readScore();
        else {

            let sorted = [...scores].sort((a, b) => b - a);

            console.log("Highest Score:", sorted[0]);
            console.log("Lowest Score:", sorted[sorted.length - 1]);

            console.log("Sorted Scores:");

            scores.forEach(score => console.log(score));

            rl.close();
        }

    });

}

readScore();