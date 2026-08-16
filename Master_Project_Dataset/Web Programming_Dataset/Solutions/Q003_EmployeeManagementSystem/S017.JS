// Correct solution.
// Uses while-style indexing through the array.

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
            employees.push({ name: name, salary: Number(salary) });

            count++;

            if (count < 5) {
                readEmployee();
            } else {
                rl.question("Search Employee: ", (searchName) => {
                    let found = false;
                    let i = 0;

                    while (i < employees.length) {
                        if (employees[i].name === searchName) {
                            console.log("Salary:", employees[i].salary);
                            found = true;
                            break;
                        }

                        i++;
                    }

                    if (!found) {
                        console.log("Employee Not Found");
                    }

                    rl.close();
                });
            }
        });
    });
}

readEmployee();