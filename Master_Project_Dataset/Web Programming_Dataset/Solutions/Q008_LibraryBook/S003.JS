// Error: Fine is always calculated even if there is no late return.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Borrowed Days: ", (borrowed) => {

    rl.question("Allowed Days: ", (allowed) => {

        borrowed = Number(borrowed);
        allowed = Number(allowed);

        let lateDays = borrowed - allowed;
        let fine = lateDays * 2;

        let status =
            fine > 20
            ? "Membership Suspended"
            : "Membership Active";

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);
        console.log("Membership Status:", status);

        rl.close();

    });

});