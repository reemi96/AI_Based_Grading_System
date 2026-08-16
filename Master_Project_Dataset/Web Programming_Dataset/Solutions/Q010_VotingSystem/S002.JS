// Error: Does not convert votes to uppercase.
// Lowercase inputs like "a" or "b" are ignored.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let votes = [];
let count = 0;

function readVote() {
    rl.question("Vote: ", (vote) => {
        votes.push(vote);
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

            if ((a === b && a >= c)  (a === c && a >= b)  (b === c && b >= a))
                console.log("Tie");
            else if (a > b && a > c)
                console.log("Winner: A");
            else if (b > a && b > c)
                console.log("Winner: B");
            else
                console.log("Winner: C");

            rl.close();
        }
    });
}

readVote();