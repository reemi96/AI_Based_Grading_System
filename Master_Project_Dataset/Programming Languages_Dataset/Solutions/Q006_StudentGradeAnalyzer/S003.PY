# Error: Divides by 4 instead of 5 when calculating the average.

grades = []

for i in range(5):
    grades.append(float(input("Enter grade: ")))

highest = max(grades)
lowest = min(grades)

average = sum(grades) / 4

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