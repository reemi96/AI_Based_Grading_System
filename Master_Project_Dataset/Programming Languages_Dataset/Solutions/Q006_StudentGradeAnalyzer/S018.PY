# Error: Does not calculate failed students.
# Failed count is always printed as 0.
# & Does not calculate highest and lowest

grades = []

for i in range(5):
    grades.append(float(input("Enter grade: ")))

average = sum(grades) / len(grades)

passed = 0

for grade in grades:
    if grade >= 50:
        passed += 1

failed = 0

print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)