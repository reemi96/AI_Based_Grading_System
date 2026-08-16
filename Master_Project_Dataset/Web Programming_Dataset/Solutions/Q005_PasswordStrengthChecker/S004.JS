// Error: Does not check for digits.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower
    )
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});