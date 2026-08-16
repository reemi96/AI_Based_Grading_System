# Error: Wrong condition.
# Employees working exactly 40 hours are treated as overtime workers.

name = input()

hours = float(input())
rate = float(input())

if hours < 40:
    regular_salary = hours * rate
    overtime_salary = 0
else:
    regular_salary = 40 * rate
    overtime_salary = (hours - 40) * rate * 1.5

print("Employee:", name)
print("Total Salary:", regular_salary + overtime_salary)