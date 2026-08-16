# Correct solution.
# Uses a while loop.

grades = []

i = 0
while i < 5:
    grades.append(float(input("Enter grade: ")))
    i += 1

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