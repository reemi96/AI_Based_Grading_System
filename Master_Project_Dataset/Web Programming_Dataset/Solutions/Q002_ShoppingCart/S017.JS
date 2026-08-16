// Correct solution.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let prices = [];
let count = 0;

function readPrice() {

    rl.question("Price: ", (price) => {

        prices.push(parseFloat(price));

        count++;

        if (count < 5) {
            readPrice();
        }
        else {

            let subtotal = prices.reduce(
                (a, b) => a + b
            );

            let discount = 0;

            if (subtotal >= 100) {
                discount = subtotal / 10;
            }

            let finalTotal =
                subtotal - discount;

            console.log("Subtotal:", subtotal);
            console.log("Discount:", discount);
            console.log("Final Total:", finalTotal);

            rl.close();
        }
    });
}

readPrice();