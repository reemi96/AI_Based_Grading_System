// Error: in age validation use (valid) instead of invalid

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Name: ", (name) => {

    rl.question("Enter Age: ", (age) => {

        rl.question("Enter Email: ", (email) => {

            age = parseInt(age);

            if (name.trim() === "") {
                console.log("Invalid Name");
            }
            else if (age < 18) {
                console.log("valid Age");
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
});