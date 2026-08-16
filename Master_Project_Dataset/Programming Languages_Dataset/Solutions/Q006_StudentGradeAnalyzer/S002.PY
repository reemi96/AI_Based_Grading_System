# Error: Uses 60 as the passing mark instead of 50.

grades = []

for i in range(5):
    grades.append(float(input("Enter grade: ")))

highest = max(grades)
lowest = min(grades)
average = sum(grades) / len(grades)

passed = 0
failed = 0

for grade in grades:
    if grade >= 60:
        passed += 1
    else:
        failed += 1

print("Highest Grade:", highest)
print("Lowest Grade:", lowest)
print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)