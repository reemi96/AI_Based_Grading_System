// Error: Bill is overwritten in each condition instead of accumulating tier costs.
// For units above 200, only the last tier is considered.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = 0;

    if (units > 100) {
        bill = 100 * 0.5;
    }

    if (units > 200) {
        bill = (units - 200) * 1.2;
    }

    let tax = bill > 150 ? bill * 0.05 : 0;
    let finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});