# Error: Highest and lowest are calculated before all grades are entered.
# They are based only on the first grade.
# & Uses > 50 instead of >= 50.

grades = []

first_grade = float(input("Enter grade: "))
grades.append(first_grade)

highest = first_grade
lowest = first_grade

for i in range(4):
    grades.append(float(input("Enter grade: ")))

average = sum(grades) / len(grades)

passed = 0
failed = 0

for grade in grades:
    if grade > 50:
        passed += 1
    else:
        failed += 1

print("Highest Grade:", highest)
print("Lowest Grade:", lowest)
print("Average Grade:", average)
print("Passed Students:", passed)
print("Failed Students:", failed)