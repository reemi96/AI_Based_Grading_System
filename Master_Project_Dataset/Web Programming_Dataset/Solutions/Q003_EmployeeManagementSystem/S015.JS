// Error: Prints all employees' salaries instead of only the searched employee salary.

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
                    for (let employee of employees) {
                        console.log("Salary:", employee.salary);
                    }

                    rl.close();
                });
            }
        });
    });
}

readEmployee();