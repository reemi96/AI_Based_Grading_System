// Error: Correct fine calculation but wrong output format.
// Labels do not match the required output.

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
        let status = fine > 20 ? "Suspended" : "Active";

        console.log(lateDays);
        console.log(fine);
        console.log(status);

        rl.close();
    });
});