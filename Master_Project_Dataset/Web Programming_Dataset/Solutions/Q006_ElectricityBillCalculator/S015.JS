// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter consumed units: ", (units) => {
    units = Number(units);

    let billBeforeTax = 0;

    if (units <= 100) {
        billBeforeTax = units * 0.5;
    }
    else if (units <= 200) {
        billBeforeTax = 50 + (units - 100) * 0.75;
    }
    else {
        billBeforeTax = 50 + 75 + (units - 200) * 1.2;
    }

    let tax = 0;

    if (billBeforeTax > 150) {
        tax = billBeforeTax * 0.05;
    }

    let finalBill = billBeforeTax + tax;

    console.log("Bill Before Tax:", billBeforeTax);
    console.log("Tax:", tax);
    console.log("Final Bill:", finalBill);

    rl.close();
});