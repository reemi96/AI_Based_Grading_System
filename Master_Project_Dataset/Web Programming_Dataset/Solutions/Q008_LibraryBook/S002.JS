// Error: Calculates late days incorrectly by subtracting borrowed days from allowed days.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Borrowed Days: ", (borrowed) => {

    rl.question("Allowed Days: ", (allowed) => {

        borrowed = Number(borrowed);
        allowed = Number(allowed);

        let lateDays = allowed - borrowed;
        let fine = lateDays * 2;

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);

        rl.close();

    });

});