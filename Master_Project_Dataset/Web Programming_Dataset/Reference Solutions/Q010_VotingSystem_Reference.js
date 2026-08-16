const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let votes = [];
let count = 0;

function readVote() {

    rl.question("Enter vote (A, B, or C): ", (vote) => {

        votes.push(vote.toUpperCase());
        count++;

        if (count < 5) {
            readVote();
        } else {

            let votesA = 0;
            let votesB = 0;
            let votesC = 0;

            for (let vote of votes) {
                if (vote === "A") {
                    votesA++;
                }
                else if (vote === "B") {
                    votesB++;
                }
                else if (vote === "C") {
                    votesC++;
                }
            }

            console.log("Votes for A:", votesA);
            console.log("Votes for B:", votesB);
            console.log("Votes for C:", votesC);

            if (
                votesA === votesB && votesA >= votesC ||
                votesA === votesC && votesA >= votesB ||
                votesB === votesC && votesB >= votesA
            ) {
                console.log("Tie");
            }
            else if (votesA > votesB && votesA > votesC) {
                console.log("Winner: A");
            }
            else if (votesB > votesA && votesB > votesC) {
                console.log("Winner: B");
            }
            else {
                console.log("Winner: C");
            }

            rl.close();
        }

    });

}

readVote();