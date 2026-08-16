// Error: Uses wrong condition for tax.
// Tax is applied when units > 150 instead of when bill > 150.
// Final bill subtracts tax instead of adding it.
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
    }
    else if (units <= 200) {
        bill = 50 + (units - 100) * 0.75;
    }
    else {
        bill = 125 + (units - 200) * 1.2;
    }

    let tax = 0;

    if (units > 150) {
        tax = bill * 0.05;
    }

    let finalBill = bill - tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});