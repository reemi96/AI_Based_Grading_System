// Error: Stops reading employees after the first employee because of misplaced rl.close().

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

            rl.close();

            count++;

            if (count < 5) {
                readEmployee();
            }
        });
    });
}

readEmployee();