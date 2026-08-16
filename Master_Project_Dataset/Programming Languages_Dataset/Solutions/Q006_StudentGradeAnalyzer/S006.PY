# Correct solution.

grades = []

for i in range(5):
    grade = float(input(f"Enter grade {i + 1}: "))
    grades.append(grade)

highest = max(grades)
lowest = min(grades)
average = sum(grades) / len(grades)

passed = 0
failed = 0

for grade in grades:
    if grade >= 50:
        passed += 1
    else:
        failed += 1

print("Highest Grade:", highest)
print("Lowest Grade:", lowest)
print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)