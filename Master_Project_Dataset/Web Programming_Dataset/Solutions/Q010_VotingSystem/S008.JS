// Error: Always prints Tie regardless of vote counts.

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

        if (count < 5) {
            readVote();
        } else {
            let a = 0, b = 0, c = 0;

            for (let vote of votes) {
                if (vote === "A") a++;
                else if (vote === "B") b++;
                else if (vote === "C") c++;
            }

            console.log("Votes for A:", a);
            console.log("Votes for B:", b);
            console.log("Votes for C:", c);
            console.log("Tie");

            rl.close();
        }
    });
}

readVote();