// Correct solution.
// Uses helper functions.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validEmail(email) {
    return email.includes("@") && email.includes(".");
}

rl.question("Name: ", (name) => {

    rl.question("Age: ", (age) => {

        rl.question("Email: ", (email) => {

            age = parseInt(age);

            if (name.trim() === "")
                console.log("Invalid Name");
            else if (age < 18)
                console.log("Invalid Age");
            else if (!validEmail(email))
                console.log("Invalid Email");
            else
                console.log("Registration Successful");

            rl.close();
        });
    });
});