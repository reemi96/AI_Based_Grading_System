// Error: Uses 5 instead of 2 as the fine per late day.
// & WITHOUT MEMBER STATUS
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

        if (borrowed > allowed)
            lateDays = borrowed - allowed;

        let fine = lateDays * 5;

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);

        rl.close();

    });

});