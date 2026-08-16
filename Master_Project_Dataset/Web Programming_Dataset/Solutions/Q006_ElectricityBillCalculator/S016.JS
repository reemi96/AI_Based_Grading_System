// Error: Boundary condition is wrong.
// 100 units and 200 units are handled in the wrong pricing range.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let bill = 0;

    if (units < 100) {
        bill = units * 0.5;
    }
    else if (units < 200) {
        bill = 50 + (units - 100) * 0.75;
    }
    else {
        bill = 125 + (units - 200) * 1.2;
    }

    let tax = bill > 150 ? bill * 0.05 : 0;
    let finalBill = bill + tax;

    console.log("Bill Before Tax:", bill);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});