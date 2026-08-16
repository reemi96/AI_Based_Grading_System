// Error: Uses only the last entered price as subtotal.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lastPrice = 0;
let count = 0;

function readPrice() {
    rl.question("Price: ", (price) => {
        lastPrice = Number(price);
        count++;

        if (count < 5) {
            readPrice();
        } else {
            let subtotal = lastPrice;
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