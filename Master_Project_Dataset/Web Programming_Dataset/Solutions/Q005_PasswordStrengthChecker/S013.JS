// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isStrong(password) {

    let upper = false;
    let lower = false;
    let digit = false;

    for (let c of password) {

        if (c >= "A" && c <= "Z")
            upper = true;

        if (c >= "a" && c <= "z")
            lower = true;

        if (c >= "0" && c <= "9")
            digit = true;
    }

    return password.length >= 8 &&
           upper &&
           lower &&
           digit;
}

rl.question("Enter Password: ", (password) => {

    if (isStrong(password))
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});