// Error: Calculates subtotal incorrectly using only the first product.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let prices = [];
let count = 0;

function readPrice() {

    rl.question("Price: ", (price) => {

        prices.push(Number(price));

        count++;

        if (count < 5) {
            readPrice();
        }
        else {

            let subtotal = prices[0];

            console.log("Subtotal:", subtotal);

            rl.close();
        }
    });
}

readPrice();