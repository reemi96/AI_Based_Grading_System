# Correct solution.
# Same logic with different implementation.

name = input()

hours = float(input())
rate = float(input())

regular_salary = 0
overtime_salary = 0

if hours > 40:
    regular_salary = 40 * rate
    overtime_salary = (hours - 40) * rate * 1.5
else:
    regular_salary = hours * rate

total_salary = regular_salary + overtime_salary

print("Employee:", name)
print("Regular Salary:", regular_salary)
print("Overtime Salary:", overtime_salary)
print("Total Salary:", total_salary)