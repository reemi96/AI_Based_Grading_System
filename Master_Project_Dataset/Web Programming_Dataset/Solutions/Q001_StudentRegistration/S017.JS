// Error: Does not read the age.
// The program cannot validate the age requirement.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {
    rl.question("Email: ", (email) => {

        if (name.trim() === "") {
            console.log("Invalid Name");
        }
        else if (!email.includes("@") || !email.includes(".")) {
            console.log("Invalid Email");
        }
        else {
            console.log("Registration Successful");
        }

        rl.close();
    });
});