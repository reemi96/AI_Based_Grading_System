// Error: Uses 0.75 for all units above 100, even if units are greater than 200.
// The third pricing range is ignored.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = 0;

    if (units <= 100) {
        bill = units * 0.5;
    } else {
        bill = (100 * 0.5) + ((units - 100) * 0.75);
    }

    let tax = bill > 150 ? bill * 0.05 : 0;
    let finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});