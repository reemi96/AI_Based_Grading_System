// Error: Does not convert inputs to numbers.
// This may cause incorrect calculations in some cases.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Borrowed Days: ", (borrowed) => {
    rl.question("Allowed Days: ", (allowed) => {

        let lateDays = 0;

        if (borrowed > allowed) {
            lateDays = borrowed - allowed;
        }

        let fine = lateDays * 2;

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);

        if (fine > 20)
            console.log("Membership Status: Membership Suspended");
        else
            console.log("Membership Status: Membership Active");

        rl.close();
    });
});