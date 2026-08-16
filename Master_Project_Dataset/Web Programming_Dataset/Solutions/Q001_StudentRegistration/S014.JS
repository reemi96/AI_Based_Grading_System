// Error: The program checks only the email.
// Name and age validations are completely missing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Email: ", (email) => {

    if (email.includes("@") && email.includes(".")) {
        console.log("Registration Successful");
    }
    else {
        console.log("Invalid Email");
    }

    rl.close();
});