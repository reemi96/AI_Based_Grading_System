// Error: Stores only the last vote.
// Previous votes are overwritten instead of stored in an array.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lastVote = "";
let count = 0;

function readVote() {
    rl.question("Vote: ", (vote) => {
        lastVote = vote.toUpperCase();
        count++;

        if (count < 5) {
            readVote();
        } else {
            let a = 0, b = 0, c = 0;

            if (lastVote === "A") a++;
            else if (lastVote === "B") b++;
            else if (lastVote === "C") c++;

            console.log("Votes for A:", a);
            console.log("Votes for B:", b);
            console.log("Votes for C:", c);

            if (a > b && a > c)
                console.log("Winner: A");
            else if (b > a && b > c)
                console.log("Winner: B");
            else if (c > a && c > b)
                console.log("Winner: C");
            else
                console.log("Tie");

            rl.close();
        }
    });
}

readVote();