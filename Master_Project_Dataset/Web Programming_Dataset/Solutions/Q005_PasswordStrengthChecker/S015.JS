// Error: Logic is reversed.
// Strong passwords are printed as Weak, and weak passwords may be printed as Strong.

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
        console.log("Weak Password");
    else
        console.log("Strong Password");

    rl.close();
});