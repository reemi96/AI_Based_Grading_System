// Error: Stops after reading the first price because of misplaced rl.close().

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

        rl.close();

        if (count < 5) {
            readPrice();
        } else {
            let subtotal = prices.reduce((a, b) => a + b);
            console.log("Subtotal:", subtotal);
        }
    });
}

readPrice();