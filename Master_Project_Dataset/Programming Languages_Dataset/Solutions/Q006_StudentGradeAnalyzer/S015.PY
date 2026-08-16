# Correct solution.

grades = []

passed = 0
failed = 0

for i in range(5):
    grade = float(input("Enter grade: "))
    grades.append(grade)

    if grade >= 50:
        passed += 1
    else:
        failed += 1

print("Highest Grade:", max(grades))
print("Lowest Grade:", min(grades))
print("Average Grade:", sum(grades) / len(grades))
print("Passed Students:", passed)
print("Failed Students:", failed)