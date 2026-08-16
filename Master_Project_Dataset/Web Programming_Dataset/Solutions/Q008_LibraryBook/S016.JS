// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Borrowed Days: ", (borrowed) => {

    rl.question("Allowed Days: ", (allowed) => {

        borrowed = Number(borrowed);
        allowed = Number(allowed);

        let late = 0;

        if (borrowed > allowed)
            late = borrowed - allowed;

        let fine = late * 2;

        let status = "Membership Active";

        if (fine > 20)
            status = "Membership Suspended";

        console.log("Late Days:", late);
        console.log("Fine:", fine);
        console.log("Membership Status:", status);

        rl.close();
    });

});