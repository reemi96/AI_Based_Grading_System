// Error: Uses wrong digit validation.
// It checks for the character "d" instead of checking numbers.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasDigit = password.includes("d");

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasDigit
    )
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});