# Error: Reads only 4 grades instead of 5.

grades = []

for i in range(4):
    grade = float(input("Enter grade: "))
    grades.append(grade)

print("Highest Grade:", max(grades))
print("Lowest Grade:", min(grades))
print("Average Grade:", sum(grades) / len(grades))

passed = 0
failed = 0

for grade in grades:
    if grade >= 50:
        passed += 1
    else:
        failed += 1

print("Passed Students:", passed)
print("Failed Students:", failed)