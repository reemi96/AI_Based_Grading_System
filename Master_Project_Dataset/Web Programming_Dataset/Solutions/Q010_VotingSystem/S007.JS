// Correct solution.

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

        if (count < 5)
            readVote();
        else {

            let votesA = votes.filter(v => v === "A").length;
            let votesB = votes.filter(v => v === "B").length;
            let votesC = votes.filter(v => v === "C").length;

            console.log("Votes for A:", votesA);
            console.log("Votes for B:", votesB);
            console.log("Votes for C:", votesC);

            if ((votesA === votesB && votesA >= votesC) ||
                (votesA === votesC && votesA >= votesB) ||
                (votesB === votesC && votesB >= votesA))
                console.log("Tie");
            else if (votesA > votesB && votesA > votesC)
                console.log("Winner: A");
            else if (votesB > votesA && votesB > votesC)
                console.log("Winner: B");
            else
                console.log("Winner: C");

            rl.close();

        }

    });

}

readVote();