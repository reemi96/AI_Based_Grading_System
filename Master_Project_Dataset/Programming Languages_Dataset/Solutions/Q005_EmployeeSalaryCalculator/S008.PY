# Error: Overtime hours are calculated incorrectly.
# Uses 40 - hours instead of hours - 40.

name = input()

hours = float(input())
rate = float(input())

if hours <= 40:
    regular_salary = hours * rate
    overtime_salary = 0
else:
    regular_salary = 40 * rate
    overtime_hours = 40 - hours
    overtime_salary = overtime_hours * rate * 1.5

total_salary = regular_salary + overtime_salary

print("Employee:", name)
print("Total Salary:", total_salary)