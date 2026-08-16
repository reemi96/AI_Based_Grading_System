// Error: Uses a fixed scores array instead of reading user input.

let scores = [75, 90, 60, 85, 70];

scores.sort((a, b) => b - a);

console.log("Highest Score:", scores[0]);
console.log("Lowest Score:", scores[scores.length - 1]);

console.log("Sorted Scores:");
scores.forEach(score => console.log(score));