// Error: The program reads all inputs but does not perform real validation.
// It only checks whether the fields exist, not whether they are valid.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {
    rl.question("Age: ", (age) => {
        rl.question("Email: ", (email) => {

            if (name && age && email) {
                console.log("Registration Successful");
            }
            else {
                console.log("Invalid Input");
            }

            rl.close();
        });
    });
});