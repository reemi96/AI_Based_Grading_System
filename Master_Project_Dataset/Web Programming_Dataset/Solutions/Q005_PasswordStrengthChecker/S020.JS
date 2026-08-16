// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let char of password) {

        if (char >= 'A' && char <= 'Z')
            hasUpper = true;

        if (char >= 'a' && char <= 'z')
            hasLower = true;

        if (char >= '0' && char <= '9')
            hasDigit = true;
    }

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasDigit
    ) {
        console.log("Strong Password");
    }
    else {
        console.log("Weak Password");
    }

    rl.close();
});