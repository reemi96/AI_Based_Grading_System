// Error: Does not read the email at all.
// The program only checks name and age, so email validation is missing completely.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {
    rl.question("Age: ", (age) => {
        age = parseInt(age);

        if (name.trim() === "") {
            console.log("Invalid Name");
        }
        else if (age < 18) {
            console.log("Invalid Age");
        }
        else {
            console.log("Registration Successful");
        }

        rl.close();
    });
});