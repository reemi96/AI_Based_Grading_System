# Error: Counts all students as failed.

grades = []

for i in range(5):
    grades.append(float(input("Enter grade: ")))

highest = max(grades)
lowest = min(grades)
average = sum(grades) / len(grades)

passed = 0
failed = len(grades)

print("Highest Grade:", highest)
print("Lowest Grade:", lowest)
print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)