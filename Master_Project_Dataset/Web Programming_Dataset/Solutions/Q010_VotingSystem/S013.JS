// Correct solution.
// Uses helper function.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVotes(votes, candidate) {

    let count = 0;

    for (let vote of votes)
        if (vote === candidate)
            count++;

    return count;
}

let votes = [];
let index = 0;

function readVote() {

    rl.question("Vote: ", (vote) => {

        votes.push(vote.toUpperCase());

        index++;

        if (index < 5)
            readVote();
        else {

            let a = countVotes(votes, "A");
            let b = countVotes(votes, "B");
            let c = countVotes(votes, "C");

            console.log("Votes for A:", a);
            console.log("Votes for B:", b);
            console.log("Votes for C:", c);

            if ((a === b && a >= c) ||
                (a === c && a >= b) ||
                (b === c && b >= a))
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