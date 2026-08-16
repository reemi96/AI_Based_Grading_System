// Error: Uses OR instead of AND.
// Password is accepted if only one condition is true.

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
        password.length >= 8 ||
        hasUpper ||
        hasLower ||
        hasDigit
    )
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});