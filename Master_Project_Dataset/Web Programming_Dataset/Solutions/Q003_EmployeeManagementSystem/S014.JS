// Correct solution.
// Uses a helper function for searching.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findEmployee(employees, searchName) {
    for (let employee of employees) {
        if (employee.name === searchName) {
            return employee;
        }
    }

    return null;
}

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
                    let result = findEmployee(employees, searchName);

                    if (result !== null) {
                        console.log("Salary:", result.salary);
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