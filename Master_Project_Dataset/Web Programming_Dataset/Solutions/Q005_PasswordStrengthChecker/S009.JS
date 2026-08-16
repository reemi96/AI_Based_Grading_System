// Error: Checks for uppercase and digit only.
// Lowercase validation is missing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasUpper = /[A-Z]/.test(password);
    let hasDigit = /[0-9]/.test(password);

    if (
        password.length >= 8 &&
        hasUpper &&
        hasDigit
    )
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});