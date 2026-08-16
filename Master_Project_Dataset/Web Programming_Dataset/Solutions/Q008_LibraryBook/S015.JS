// Error: Reads only borrowed days.
// Allowed days input is missing, so late days cannot be calculated correctly.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Borrowed Days: ", (borrowed) => {

    borrowed = Number(borrowed);

    let allowed = 14;
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