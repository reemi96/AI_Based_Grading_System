const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter borrowed days: ", (borrowedDays) => {

    rl.question("Enter allowed days: ", (allowedDays) => {

        borrowedDays = Number(borrowedDays);
        allowedDays = Number(allowedDays);

        let lateDays = 0;
        let fine = 0;
        let status = "";

        if (borrowedDays > allowedDays) {
            lateDays = borrowedDays - allowedDays;
            fine = lateDays * 2;
        }

        if (fine > 20) {
            status = "Membership Suspended";
        } else {
            status = "Membership Active";
        }

        console.log("Late Days:", lateDays);
        console.log("Fine:", fine);
        console.log("Membership Status:", status);

        rl.close();
    });

});