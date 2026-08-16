// Error: Stores employee names only.
// Salaries are not stored, so the program cannot display the correct salary.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employees = [];
let count = 0;

function readEmployee() {
    rl.question("Employee Name: ", (name) => {
        rl.question("Salary: ", (salary) => {
            employees.push(name);

            count++;

            if (count < 5) {
                readEmployee();
            } else {
                rl.question("Search Employee: ", (searchName) => {
                    if (employees.includes(searchName)) {
                        console.log("Salary:", salary);
                    } else {
                        console.log("Employee Not Found");
                    }

                    rl.close();
                });
            }
        });
    });
}

readEmployee();