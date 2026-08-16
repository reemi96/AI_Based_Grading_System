// Correct solution.
// Uses helper function.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFine(lateDays) {
    return lateDays * 2;
}

rl.question("Enter borrowed days: ", (borrowedDays) => {

    rl.question("Enter allowed days: ", (allowedDays) => {

        borrowedDays = Number(borrowedDays);
        allowedDays = Number(allowedDays);

        let lateDays = Math.max(0, borrowedDays - allowedDays);
        let fine = calculateFine(lateDays);

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);

        if (fine > 20)
            console.log("Membership Status: Membership Suspended");
        else
            console.log("Membership Status: Membership Active");

        rl.close();
    });

});