// Error: Always prints Weak Password.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    console.log("Weak Password");

    rl.close();
});