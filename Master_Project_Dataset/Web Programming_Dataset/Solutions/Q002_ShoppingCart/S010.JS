// Error: Reads prices correctly but does not convert them to numbers.
// Subtotal becomes string concatenation instead of numeric addition.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let prices = [];
let count = 0;

function readPrice() {
    rl.question("Price: ", (price) => {
        prices.push(price);
        count++;

        if (count < 5) {
            readPrice();
        } else {
            let subtotal = "";

            for (let price of prices) {
                subtotal += price;
            }

            console.log("Subtotal:", subtotal);

            rl.close();
        }
    });
}

readPrice();