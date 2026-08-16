// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let prices = [];

function readPrices(index) {

    if (index === 5) {

        let subtotal = 0;

        for (let i = 0; i < prices.length; i++) {
            subtotal += prices[i];
        }

        let discount = 0;

        if (subtotal >= 100)
            discount = subtotal * 0.10;

        console.log("Subtotal:", subtotal);
        console.log("Discount:", discount);
        console.log("Final Total:", subtotal - discount);

        rl.close();
        return;
    }

    rl.question("Price: ", (price) => {

        prices.push(Number(price));

        readPrices(index + 1);
    });
}

readPrices(0);