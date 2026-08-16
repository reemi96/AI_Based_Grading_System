// Error: Resets validation flags inside the loop.
// Final result depends mainly on the last character.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let ch of password) {
        hasUpper = false;
        hasLower = false;
        hasDigit = false;

        if (ch >= "A" && ch <= "Z")
            hasUpper = true;

        if (ch >= "a" && ch <= "z")
            hasLower = true;

        if (ch >= "0" && ch <= "9")
            hasDigit = true;
    }

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