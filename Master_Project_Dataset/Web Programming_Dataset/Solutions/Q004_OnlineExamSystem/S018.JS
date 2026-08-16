// Error: Uses a fixed list instead of reading grades from the user.

let grades = [70, 80, 90, 60, 75];

let sum = 0;

for (let grade of grades) {
    sum += grade;
}

let average = sum / grades.length;

console.log("Average:", average);

if (average >= 60)
    console.log("Result: Pass");
else
    console.log("Result: Fail");