// Error: Uses a fixed list instead of reading grades from the user.

let grades = [95, 85, 75, 65, 55];

function gradeToPoint(grade) {
    if (grade >= 90) return 4;
    else if (grade >= 80) return 3;
    else if (grade >= 70) return 2;
    else if (grade >= 60) return 1;
    else return 0;
}

let total = 0;

for (let grade of grades) {
    total += gradeToPoint(grade);
}

let gpa = total / grades.length;

console.log("GPA:", gpa);

if (gpa >= 3.5)
    console.log("Standing: Excellent");
else if (gpa >= 2.5)
    console.log("Standing: Very Good");
else if (gpa >= 2.0)
    console.log("Standing: Good");
else if (gpa >= 1.0)
    console.log("Standing: Pass");
else
    console.log("Standing: Fail");