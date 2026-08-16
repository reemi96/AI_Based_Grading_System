// Error: Subtotal is calculated using multiplication instead of addition.

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
        } else {
            let subtotal = 1;

            for (let price of prices) {
                subtotal *= price;
            }

            let discount = 0;

            if (subtotal >= 100) {
                discount = subtotal * 0.10;
            }

            console.log("Subtotal:", subtotal);
            console.log("Discount:", discount);
            console.log("Final Total:", subtotal - discount);

            rl.close();
        }
    });
}

readPrice();