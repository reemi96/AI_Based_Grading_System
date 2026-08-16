// Error: Searches only the first employee in the array.
// Other employees are ignored.

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
                    if (employees[0].name === searchName) {
                        console.log("Salary:", employees[0].salary);
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