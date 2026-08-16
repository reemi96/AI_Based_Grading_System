// Error: No discount calculation at all.

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

            let subtotal = 0;

            for (let price of prices) {
                subtotal += price;
            }

            console.log("Subtotal:", subtotal);
            console.log("Final Total:", subtotal);

            rl.close();
        }
    });
}

readPrice();