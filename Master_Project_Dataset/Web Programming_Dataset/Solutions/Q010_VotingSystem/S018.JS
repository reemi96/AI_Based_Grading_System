// Error: Stops after reading the first vote because rl.close() is placed too early.
// WITHOUT COUNT VOTES & WINNER/TIE LLOGIC
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let votes = [];
let count = 0;

function readVote() {
    rl.question("Vote: ", (vote) => {
        votes.push(vote.toUpperCase());
        count++;

        rl.close();

        if (count < 5) {
            readVote();
        }
    });
}

readVote();