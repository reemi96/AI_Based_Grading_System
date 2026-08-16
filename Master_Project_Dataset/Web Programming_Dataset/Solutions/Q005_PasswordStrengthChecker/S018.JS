// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    let upper = false;
    let lower = false;
    let digit = false;

    for (let i = 0; i < password.length; i++) {

        let ch = password[i];

        if (ch >= "A" && ch <= "Z")
            upper = true;

        else if (ch >= "a" && ch <= "z")
            lower = true;

        else if (ch >= "0" && ch <= "9")
            digit = true;
    }

    if (
        password.length >= 8 &&
        upper &&
        lower &&
        digit
    )
        console.log("Strong Password");
    else
        console.log("Weak Password");

    rl.close();
});