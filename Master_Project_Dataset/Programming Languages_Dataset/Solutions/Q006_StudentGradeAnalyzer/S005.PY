# Error: Counts all students as passed.

grades = []

for i in range(5):
    grades.append(float(input("Enter grade: ")))

highest = max(grades)
lowest = min(grades)
average = sum(grades) / len(grades)

passed = len(grades)
failed = 0

print("Highest Grade:", highest)
print("Lowest Grade:", lowest)
print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)