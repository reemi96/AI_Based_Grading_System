// Error: Uses 20% discount instead of 10%.

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

            let subtotal = prices.reduce((a,b)=>a+b);

            let discount = 0;

            if (subtotal >= 100) {
                discount = subtotal * 0.20;
            }

            console.log("Final Total:",
                subtotal - discount);

            rl.close();
        }
    });
}

readPrice();