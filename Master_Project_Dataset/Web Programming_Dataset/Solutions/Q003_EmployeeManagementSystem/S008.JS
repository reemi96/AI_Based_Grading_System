// Error: Searches only the last employee in the array.
// Employees before the last one are ignored.

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
                    let last = employees[employees.length - 1];

                    if (last.name === searchName) {
                        console.log("Salary:", last.salary);
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