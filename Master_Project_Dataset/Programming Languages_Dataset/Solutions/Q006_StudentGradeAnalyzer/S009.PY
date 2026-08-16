# Error: Does not store grades in a list.
# Only the last entered grade is kept.
# Without average & highest & lowest

for i in range(5):
    grade = float(input("Enter grade: "))

highest = grade
lowest = grade
average = grade

if grade >= 50:
    passed = 1
    failed = 0
else:
    passed = 0
    failed = 1

print("Highest Grade:", highest)
print("Lowest Grade:", lowest)
print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)