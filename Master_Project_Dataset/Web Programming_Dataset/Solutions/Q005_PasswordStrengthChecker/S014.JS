// Error: Reads input correctly but does not perform validation.
// It only prints the password length.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Password: ", (password) => {

    console.log(password.length);

    rl.close();
});