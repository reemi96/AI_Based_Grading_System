const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grades = [];
let count = 0;

function gradeToPoint(grade) {
    if (grade >= 90) {
        return 4.0;
    }
    else if (grade >= 80) {
        return 3.0;
    }
    else if (grade >= 70) {
        return 2.0;
    }
    else if (grade >= 60) {
        return 1.0;
    }
    else {
        return 0.0;
    }
}

function readGrade() {
    rl.question("Enter grade: ", (grade) => {
        grades.push(Number(grade));
        count++;

        if (count < 5) {
            readGrade();
        }
        else {
            let totalPoints = 0;

            for (let grade of grades) {
                totalPoints += gradeToPoint(grade);
            }

            let gpa = totalPoints / grades.length;

            let standing = "";

            if (gpa >= 3.5) {
                standing = "Excellent";
            }
            else if (gpa >= 2.5) {
                standing = "Very Good";
            }
            else if (gpa >= 2.0) {
                standing = "Good";
            }
            else if (gpa >= 1.0) {
                standing = "Pass";
            }
            else {
                standing = "Fail";
            }

            console.log("GPA:", gpa);
            console.log("Standing:", standing);

            rl.close();
        }
    });
}

readGrade();