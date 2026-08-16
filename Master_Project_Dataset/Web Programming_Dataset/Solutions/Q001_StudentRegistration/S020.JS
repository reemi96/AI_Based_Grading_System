// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {

    rl.question("Age: ", (age) => {

        rl.question("Email: ", (email) => {

            age = parseInt(age);

            if (
                name.trim() !== "" &&
                age >= 18 &&
                email.includes("@") &&
                email.includes(".")
            ) {
                console.log("Registration Successful");
            }
            else if (name.trim() === "") {
                console.log("Invalid Name");
            }
            else if (age < 18) {
                console.log("Invalid Age");
            }
            else {
                console.log("Invalid Email");
            }

            rl.close();
        });
    });
});