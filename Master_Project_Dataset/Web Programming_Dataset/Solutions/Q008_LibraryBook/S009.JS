// Error: Always prints Membership Active even when the fine is greater than 20.

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

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);
        console.log("Membership Status: Membership Active");

        rl.close();
    });
});