// Error: Always prints Strong Password.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    console.log("Strong Password");

    rl.close();
});