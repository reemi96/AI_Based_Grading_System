// Error: The program checks only the name.
// Age and email validations are completely missing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {

    if (name.trim() !== "") {
        console.log("Registration Successful");
    }
    else {
        console.log("Invalid Name");
    }

    rl.close();
});