// Error: Stores only the last employee.
// Previous employees are overwritten because no array is used.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employeeName = "";
let employeeSalary = 0;
let count = 0;

function readEmployee() {
    rl.question("Employee Name: ", (name) => {
        rl.question("Salary: ", (salary) => {
            employeeName = name;
            employeeSalary = Number(salary);

            count++;

            if (count < 5) {
                readEmployee();
            } else {
                rl.question("Search Employee: ", (searchName) => {
                    if (employeeName === searchName) {
                        console.log("Salary:", employeeSalary);
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