// Correct solution.
// Uses helper function to calculate the bill.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateBill(units) {
    if (units <= 100) {
        return units * 0.5;
    }
    else if (units <= 200) {
        return (100 * 0.5) + ((units - 100) * 0.75);
    }
    else {
        return (100 * 0.5) + (100 * 0.75) + ((units - 200) * 1.2);
    }
}

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = calculateBill(units);
    let tax = bill > 150 ? bill * 0.05 : 0;
    let finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});