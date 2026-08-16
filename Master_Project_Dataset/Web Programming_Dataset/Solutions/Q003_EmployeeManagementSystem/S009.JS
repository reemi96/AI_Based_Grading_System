// Error: Does not display "Employee Not Found" when the employee does not exist.

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
                        if (employee.name === searchName) {
                            console.log("Salary:", employee.salary);
                            break;
                        }
                    }

                    rl.close();
                });
            }
        });
    });
}

readEmployee();