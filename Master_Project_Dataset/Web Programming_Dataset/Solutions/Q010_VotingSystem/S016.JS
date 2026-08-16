// Error: Uses a fixed votes array instead of reading user input.

let votes = ["A", "B", "A", "C", "A"];

let a = 0, b = 0, c = 0;

for (let vote of votes) {
    if (vote === "A") a++;
    else if (vote === "B") b++;
    else if (vote === "C") c++;
}

console.log("Votes for A:", a);
console.log("Votes for B:", b);
console.log("Votes for C:", c);

if ((a === b && a >= c)  (a === c && a >= b)  (b === c && b >= a))
    console.log("Tie");
else if (a > b && a > c)
    console.log("Winner: A");
else if (b > a && b > c)
    console.log("Winner: B");
else
    console.log("Winner: C");