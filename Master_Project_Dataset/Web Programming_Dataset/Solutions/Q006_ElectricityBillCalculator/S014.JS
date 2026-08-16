// Error: Bill is correct, but tax and final bill are not calculated or printed.

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

    console.log("Bill Before Tax:", bill);

    rl.close();
});