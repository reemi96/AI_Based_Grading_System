// Correct solution.
// Calculates bill using the three pricing ranges and applies tax only if bill > 150.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = 0;
    let tax = 0;
    let finalBill = 0;

    if (units <= 100) {
        bill = units * 0.5;
    }
    else if (units <= 200) {
        bill = (100 * 0.5) + ((units - 100) * 0.75);
    }
    else {
        bill = (100 * 0.5) + (100 * 0.75) + ((units - 200) * 1.2);
    }

    if (bill > 150) {
        tax = bill * 0.05;
    }

    finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});