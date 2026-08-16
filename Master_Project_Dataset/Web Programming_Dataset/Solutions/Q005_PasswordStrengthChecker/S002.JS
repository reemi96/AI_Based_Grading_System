// Error: Checks length only.
// Uppercase, lowercase and digit validation are missing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    if (password.length >= 8)
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});