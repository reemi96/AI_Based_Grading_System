// Error: Uses one flat rate for all units.
// Tiered pricing is completely missing.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = units * 1.2;

    let tax = bill > 150 ? bill * 0.05 : 0;
    let finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});