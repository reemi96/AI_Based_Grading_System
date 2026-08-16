# Error: Overtime is added twice to the total salary.

name = input()

hours = float(input())
rate = float(input())

if hours <= 40:
    regular_salary = hours * rate
    overtime_salary = 0
else:
    regular_salary = 40 * rate
    overtime_salary = (hours - 40) * rate * 1.5

total_salary = regular_salary + overtime_salary + overtime_salary

print("Employee:", name)
print("Total Salary:", total_salary)