// Error: Uses >= 20 instead of > 20.
// Fine exactly 20 is incorrectly classified as suspended.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Borrowed Days: ", (borrowed) => {
    rl.question("Allowed Days: ", (allowed) => {

        borrowed = Number(borrowed);
        allowed = Number(allowed);

        let lateDays = 0;

        if (borrowed > allowed) {
            lateDays = borrowed - allowed;
        }

        let fine = lateDays * 2;

        if (fine >= 20)
            console.log("Membership Status: Membership Suspended");
        else
            console.log("Membership Status: Membership Active");

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);

        rl.close();
    });
});