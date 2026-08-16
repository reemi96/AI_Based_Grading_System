// Error: Does not check for uppercase letters.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasLower = /[a-z]/.test(password);
    let hasDigit = /[0-9]/.test(password);

    if (
        password.length >= 8 &&
        hasLower &&
        hasDigit
    )
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});