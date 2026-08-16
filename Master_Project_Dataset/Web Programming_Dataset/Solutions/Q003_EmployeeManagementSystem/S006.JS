// Correct solution.
// Uses an array of objects and searches by employee name.

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
            employees.push({
                name: name,
                salary: Number(salary)
            });

            count++;

            if (count < 5) {
                readEmployee();
            } else {
                rl.question("Search Employee: ", (searchName) => {
                    let found = false;

                    for (let employee of employees) {
                        if (employee.name === searchName) {
                            console.log("Salary:", employee.salary);
                            found = true;
                            break;
                        }
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