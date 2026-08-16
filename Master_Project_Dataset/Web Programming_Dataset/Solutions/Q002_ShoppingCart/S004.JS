// Error: Applies discount to every order.

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

            let discount = subtotal * 0.10;

            console.log("Final Total:",
                subtotal - discount);

            rl.close();
        }
    });
}

readPrice();