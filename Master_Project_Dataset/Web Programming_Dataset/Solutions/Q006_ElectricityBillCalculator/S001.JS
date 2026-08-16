// Error: Uses the first rate (0.5) for all units.
// The second and third pricing ranges are ignored.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = units * 0.5;
    let tax = 0;

    if (bill > 150) {
        tax = bill * 0.05;
    }

    let finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});