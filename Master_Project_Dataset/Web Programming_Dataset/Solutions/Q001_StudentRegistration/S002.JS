// Error: Does not validate the name field.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", (name) => {

    rl.question("Age: ", (age) => {

        rl.question("Email: ", (email) => {

            age = parseInt(age);

            if (age < 18)
                console.log("Invalid Age");
            else if (!email.includes("@") || !email.includes("."))
                console.log("Invalid Email");
            else
                console.log("Registration Successful");

            rl.close();
        });
    });
});