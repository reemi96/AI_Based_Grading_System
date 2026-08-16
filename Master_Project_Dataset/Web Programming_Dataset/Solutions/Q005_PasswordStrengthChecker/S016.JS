// Error: Correct validation but wrong output messages.
// Output does not match the required specification.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasDigit = /[0-9]/.test(password);

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasDigit
    )
        console.log("Valid");
    else
        console.log("Invalid");

    rl.close();
});