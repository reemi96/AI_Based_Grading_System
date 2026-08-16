// Error: Age and email validation conditions are reversed.
// Valid inputs may be rejected and invalid inputs may be accepted.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {
    rl.question("Age: ", (age) => {
        rl.question("Email: ", (email) => {

            age = parseInt(age);

            if (name.trim() === "") {
                console.log("Invalid Name");
            }
            else if (age >= 18) {
                console.log("Invalid Age");
            }
            else if (email.includes("@") && email.includes(".")) {
                console.log("Invalid Email");
            }
            else {
                console.log("Registration Successful");
            }

            rl.close();
        });
    });
});